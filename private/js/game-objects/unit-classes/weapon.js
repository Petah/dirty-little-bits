module.export = class Weapon {
    constructor(damage
        , range
        , fireRate
        , areaOfEffect
        , projectileSpeed
        , projectile) {
            this.damage = damage;
            this.range = range;
            this.fireRate = fireRate;
            this.areaOfEffect = areaOfEffect;
            this.projectileSpeed = projectileSpeed;
    }

    fire(currentX, currentY, destinationX, destinationY) {
        
    }
}