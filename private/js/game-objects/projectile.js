const MoveableGameObject = require("./moveable-game-object")

class Projectile extends MoveableGameObject{

    constructor(x,
        y,
        direction,
        sprite,
        xVelocity,
        yVelocity,
        damage,
        range,
        areaOfEffect) {
            super(x, y, direction, sprite, xVelocity, yVelocity);
            this.damage = damage;
            this.range = range;
            this.areaOfEffect = areaOfEffect;
        }
}