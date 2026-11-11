const GameObject = require('./game-object');
const CollectorUnit = require('./unit-classes/collector-unit');
const MissileUnit = require('./unit-classes/missile-unit');
const TankUnit = require('./unit-classes/tank-unit');
const KamikazeUnit = require('./unit-classes/kamikaze-unit');

module.exports = class Spawner extends GameObject {
    constructor(game,
        x,
        y,
        direction,
        sprite,
        collisionRadius,
    ) {
        super(
            game,
            x,
            y,
            direction,
            120,
            collisionRadius,
        );
        this.layer = 'map';
        this.spawnTimer = null;
    }

    loop(deltaTime, currentTime) {
        if (this.spawnTimer !== null) {
            this.spawnTimer -= deltaTime;
            if (this.spawnTimer <= 0) {
                console.log('spawn');
                this.spawnTimer = null;
                const alive = {
                    CollectorUnit: false,
                    MissileUnit: false,
                    TankUnit: false,
                    KamikazeUnit: false,
                };
                let g = this.team.units.length;
                while (g--) {
                    alive[this.team.units[g].subType] = true;
                }
                for (let type in alive) {
                    if (!alive[type]) {
                        console.log('spawn unit', type);
                        switch (type) {
                            case 'CollectorUnit': {
                                this.team.createUnit(new CollectorUnit(this.game, this.x - 100, this.y, 0, 2, 0, 0, this.team));
                                break;
                            }
                            case 'MissileUnit': {
                                this.team.createUnit(new MissileUnit(this.game, this.x + 100, this.y, 0, 2, 0, 0, this.team));
                                break;
                            }
                            case 'KamikazeUnit': {
                                this.team.createUnit(new KamikazeUnit(this.game, this.x, this.y - 100, 0, 2, 0, 0, this.team));
                                break;
                            }
                            case 'TankUnit': {
                                this.team.createUnit(new TankUnit(this.game, this.x, this.y + 100, 0, 2, 0, 0, this.team));
                                break;
                            }
                        }
                        this.game.playAudioAtPoint('spawn', this.x, this.y);
                        return;
                    }
                }
            }
            return;
        }
        let g = this.team.units.length;
        if (g < 4) {
            console.log('start spawn');
            this.spawnTimer = 4;
        }
    }
}