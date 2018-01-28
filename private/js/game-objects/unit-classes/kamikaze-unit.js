const Unit = require("./unit");
const math = require('../../utilities/math');

const sprites = {
    up: [21, 31],
    down: [20, 30],
    left: [22, 32],
    right: [23, 33],
    upMove: [21, 31],
    downMove: [20, 30],
    leftMove: [22, 32],
    rightMove: [23, 33],
};

module.exports = class KamikazeUnit extends Unit {
    constructor(
        game,
        x,
        y,
        direction,
        sprite,
        xVelocity,
        yVelocity,
        team,
        teamColor
    ) {
        super(
            game,
            x,
            y,
            direction,
            sprites.up[team.id],
            xVelocity,
            yVelocity,
            team,
            teamColor,
        );
        this.type = 'Unit';
        this.subType = 'KamikazeUnit';
        this.maxSpeed = 240;
        this.collisionRadius = 80;
        this.timeUntilExplode = 0;
        this.speedIncreased = false;
    }

    loop(deltaTime, currentTime) {
        super.loop(deltaTime, currentTime);

        this.updateSprite(sprites);

        if (this.shooting) {
            if (!this.speedIncreased) {
                this.speedIncreased = true;
                this.timeUntilExplode = 0.5;
                this.maxSpeed *= 2;
            }
        }

        if (this.speedIncreased) {
            const collisions = this.game.collisions[this.id];
            let i = collisions.length;
            while (i--) {
                if (collisions[i].type === 'Unit' && collisions[i].team.id !== this.team.id) {
                    collisions[i].getHurt(this, 9000);
                    this.die(collisions[i]);
                    return;
                }
            }


            this.timeUntilExplode -= deltaTime;
            if (this.timeUntilExplode <= 0) {
                //console.log('called explode');
                this.collisionRadius = 150;
                this.explode();
            }
        }
    }

    explode() {
        const collisions = this.game.collisions[this.id];
        let i = collisions.length;

        // console.log("playing explode sound");
        this.game.playAudioAtPoint('explode', this.x, this.y);

        if (i === 0) {
            this.die();
        }

        while (i--) {
            if (collisions[i].type === 'Unit' && collisions[i].team.id !== this.team.id) {
                collisions[i].getHurt(this, 9000);
                this.die(collisions[i]);
            }
        }
    }

    die(target) {
        this.game.server.send('explode', {
            x: this.x,
            y: this.y,
        });
        this.game.removeGameObject(this);
    }

    ai() {
        const target = this.findTarget();
        if (target) {
            const direction = math.pointDirection(this.x, this.y, target.x, target.y);
            const distance = math.pointDistance(this.x, this.y, target.x, target.y);
            if (distance < 80) {
                this.shooting = true;
            } else {
                if (this.shooting || Math.random() < 0.5) {
                    this.accelerate(math.lengthDirX(1000, direction), math.lengthDirY(1000, direction));
                }
            }
        }
    }

    findTarget() {
        let targets = [];
        let g = this.game.gameObjects.length;
        while (g--) {
            if (this.game.gameObjects[g].type == 'Unit' && this.game.gameObjects[g].team.id != this.team.id) {
                targets.push(this.game.gameObjects[g]);
            }
        }
        let closestDistance = null;
        let closest = null;
        let c = targets.length;
        while (c--) {
            const distance = math.pointDistance(this.x, this.y, targets[c].x, targets[c].y);
            if (!closest || distance < closestDistance) {
                closest = targets[c];
                closestDistance = distance;
            }
        }
        return closest;
    }
}
