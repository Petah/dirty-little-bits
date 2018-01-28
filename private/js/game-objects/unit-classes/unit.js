const MovableGameObject = require("../movable-game-object")
const Team = require("../../player-collections/team");

module.exports = class Unit extends MovableGameObject {
    constructor(
        game,
        x,
        y,
        direction,
        sprite,
        xVelocity,
        yVelocity,
        team,
    ) {
        super(game, x, y, direction, sprite, xVelocity, yVelocity);
        this.type = 'Unit';
        this.team = team;
        this.moving = false;
        this.powerUp = null;
        this.powerUpTime = 0;
        this.shooting = false;
        this.health = 100;
        this.maxHealth = 100;
        this.waiting = true;
        this.waitTime = 1;
        this.aiRandomFactor = 10000;
    }

    getHurt(object, damage) {
        this.health -= damage;
        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }
        if (this.health <= 0) {
            this.onDie();
            this.game.removeGameObject(this);
        }
    }

    onDie() {
        this.showDeathAnimation();
    }

    showDeathAnimation() {

    }

    loop(deltaTime, currentTime) {
        super.loop(deltaTime, currentTime);
        const collisions = this.game.collisions[this.id];
        let i = collisions.length;
        while (i--) {
            if (collisions[i].id == this.id || (collisions[i].unit && (collisions[i].unit.id == this.id))) {
                continue;
            }
            if (collisions[i].type == 'projectile') {
                this.getHurt(collisions[i]);
            }
        }

        if (this.powerUp) {
            this.powerUpTime -= deltaTime;
            if (this.powerUpTime <= 0) {
                this.powerUp();
                this.powerUp = null;
            }
        }
    }

    updateSprite(sprites) {
        if (this.direction >= 230 && this.direction <= 320) {
            this.setSprite(this.yVelocity, sprites.up, sprites.upMove);
        } else if (this.direction >= 140 && this.direction <= 230) {
            this.setSprite(this.xVelocity, sprites.left, sprites.leftMove);
        } else if (this.direction >= 50 && this.direction <= 140) {
            this.setSprite(this.yVelocity, sprites.down, sprites.downMove);
        } else {
            this.setSprite(this.xVelocity, sprites.right, sprites.rightMove);
        }
    }

    setSprite(velocity, stillSprites, movingSprites) {
        if (Math.abs(velocity) < 50.00) {
            this.moving = false;
            this.sprite = stillSprites[this.team.id];
        } else {
            this.moving = true;
            if (movingSprites && movingSprites[this.team.id]) {
                this.sprite = movingSprites[this.team.id];
            } else {
                this.sprite = stillSprites[this.team.id];
            }
        }
    }

    ai() {

    }
}
