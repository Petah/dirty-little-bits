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
                this.weapon = null;
        this.lastPlayedWalkSound = 0;
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
        if(this.subType === 'TankUnit') {
            console.log("SubTypeDied: " + this.subType);
            this.game.playAudioAtPoint('tank-die', this.x, this.y);
        } else if(this.subType === 'CollectorUnit') {
            this.game.playAudioAtPoint('die', this.x, this.y);
        } else if(this.subType === 'MissileUnit') {
            this.game.playAudioAtPoint('missile-die', this.x, this.y);
        }
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

        this.plaWalkSound(currentTime);
    }

    plaWalkSound(currentTime) {
        if(currentTime - this.lastPlayedWalkSound > 2) {
            if(this.subType == 'CollectorUnit') {
                this.game.playAudioAtPoint('collector-walk', this.x, this.y);
                this.lastPlayedWalkSound = currentTime;
            } else if(this.subType == 'MissileUnit') {
                this.game.playAudioAtPoint('missile-walk', this.x, this.y);
                this.lastPlayedWalkSound = currentTime;
            }  else if(this.subType == 'TankUnit') {
                this.game.playAudioAtPoint('tank-walk', this.x, this.y);
                this.lastPlayedWalkSound = currentTime;
            } else if(this.subType == 'KamikazeUnit') {
                this.game.playAudioAtPoint('kamikaze-walk', this.x, this.y);
                this.lastPlayedWalkSound = currentTime;
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
