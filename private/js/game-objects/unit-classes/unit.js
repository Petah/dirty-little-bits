const MoveableGameObject = require("./moveable-game-object")
const Weapon = require("./weapon")
const Team = require("./../../team")

module.export = class Unit {
    constructor(
        x,
        y,
        direction,
        sprite,
        xVelocity,
        yVelocity,
        team,
        teamColor,
        weaponArray) {
        super(x, y, direction, sprite, xVelocity, yVelocity);
        this.team        = team;
        this.teamColor   = teamColor;
        this.weaponArray = weaponArray;
    }

    attack(enemyX, enemyY) {
        let distance = Math.hypot(this.x, enemyX, this.y, enemyY);

        let oneWeaponInRange = false;
        let i = this.weaponArray.length;
        while(i--) {
            let weapon = this.weaponArray[i];
            if(weapon.range > distance) {
                weapon.fire(this.x, this.y, enemyX, enemyY);
            }
        }
    }
}