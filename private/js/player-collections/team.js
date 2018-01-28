const CollectorUnit = require("../game-objects/unit-classes/collector-unit");
const MissileUnit = require("../game-objects/unit-classes/missile-unit");
const KamikazeUnit = require("../game-objects/unit-classes/kamikaze-unit");
const TankUnit = require("../game-objects/unit-classes/tank-unit");

module.exports = class Team {
    constructor(
        game,
        id,
        spawner,
    ) {
        this.game = game;
        this.id = id;
        this.name = null;
        this.spawner = spawner;
        this.players = [];
        this.satelliteParts = 0;
        this.units = [];
        this.nextUnitIndex = 0;
        this.unitsToCreate = [];

        this.createUnit(new CollectorUnit(this.game, spawner.x - 100, spawner.y, 0, 2, 0, 0, this));
        this.createUnit(new MissileUnit(this.game, spawner.x + 100, spawner.y, 0, 2, 0, 0, this));
        this.createUnit(new KamikazeUnit(this.game, spawner.x, spawner.y - 100, 0, 2, 0, 0, this));
        this.createUnit(new TankUnit(this.game, spawner.x, spawner.y + 100, 0, 2, 0, 0, this));
        this.satelliteStack = null;
    }

    createUnit(unit) {
        this.unitsToCreate.push(unit);
    }

    addPlayer(player) {
        console.log('addPlayer');
        this.players.push(player);
        this.nextUnit(player, true);
    }

    nextUnit(player, force) {
        if (force || player.nextUnitCooldown <= 0) {
            player.nextUnitCooldown = 1;
            console.log('nextUnit');
            if (!this.units.length) {
                console.log('no units');
                return;
            }
            player.unit = this.units[this.nextUnitIndex];
            player.unitIndex = this.nextUnitIndex;
            this.nextUnitIndex++;
            if (this.nextUnitIndex >= this.units.length) {
                this.nextUnitIndex = 0;
            }
        }
    }

    loop(deltaTime, currentTime) {
        let p = this.players.length;
        while (p--) {
            this.players[p].loop(deltaTime, currentTime);
        }

        this.ai();

        while (this.unitsToCreate.length) {
            let unit = this.unitsToCreate.pop();
            this.units.push(unit);
            this.game.gameObjects.push(unit);
        }
    }

    ai() {
        let u = this.units.length;
        while (u--) {
            let found = false;
            let p = this.players.length;
            while (p--) {
                if (this.players[p].unit && this.players[p].unit.id === this.units[u].id) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                this.units[u].ai();
            }
        }
    }

    removeUnits(gameObjectsToRemove) {
        this.units = this.units.filter(gameObject => gameObjectsToRemove.indexOf(gameObject.id) === -1);
        let p = this.players.length;
        while (p--) {
            if (this.players[p].unit && gameObjectsToRemove.indexOf(this.players[p].unit.id) !== -1) {
                console.log('killing player');
                this.players[p].unit = null;
                this.nextUnit(true);
            }
        }
    }
}
