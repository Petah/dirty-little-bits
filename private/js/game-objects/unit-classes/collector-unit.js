const logger = require('../../server/logger')(__filename);
const Unit = require("./unit");
const SatelliteStack = require('../satellite-stack')
const math = require('../../utilities/math');

const sprites = {
    up: [6, 10],
    down: [5, 9],
    left: [7, 11],
    right: [8, 12],
    upMove: [6, 10],
    downMove: [5, 9],
    leftMove: [7, 11],
    rightMove: [8, 12],
};

module.exports = class CollectorUnit extends Unit {
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
        super(
            game,
            x,
            y,
            direction,
            2,
            xVelocity,
            yVelocity,
            team,
        );
        this.health = 10;
        this.maxHealth = 10;
        this.maxSpeed = 260;
        this.hasPart = false;
        this.part = null;
        this.canPickUpPart = false;
        this.timeToSteal = 3;
        this.timeToHold = 20;
        this.timeElapsed = 0;
        this.isStealing = false;
        this.type = 'Unit';
        this.subType = 'CollectorUnit';
        this.collisionRadius = 40;
        this.collectState = null;
        this.timeToCollect = 1;
    }

    loop(deltaTime, currentTime) {
        super.loop(deltaTime, currentTime);
        this.updateSprite(sprites);

        if (this.shooting) {
            switch (this.collectState) {
                case 'collecting': {
                    //console.log('collecting', this.collectTime);
                    this.accelerate(0, 0);
                    this.collectTime -= deltaTime;
                    if (this.collectTime <= 0) {
                        this.game.removeGameObject(this.collectUnit);
                        this.hasPart = this.collectUnit.sprite;
                        this.collectState = null;
                        this.collectUnit = null;
                    }
                    break;
                }
                case 'stealing': {
                    //console.log('stealing', this.collectTime);
                    this.accelerate(0, 0);
                    this.collectTime -= deltaTime;
                    if (this.collectTime <= 0) {
                        if (this.collectUnit.parts[SatelliteStack.sprites.antenna]) {
                            this.collectUnit.removePart(SatelliteStack.sprites.antenna);
                            this.hasPart = SatelliteStack.sprites.antenna;
                        } else if (this.collectUnit.parts[SatelliteStack.sprites.dish]) {
                            this.collectUnit.removePart(SatelliteStack.sprites.dish);
                            this.hasPart = SatelliteStack.sprites.dish;
                        } else if (this.collectUnit.parts[SatelliteStack.sprites.frame]) {
                            this.collectUnit.removePart(SatelliteStack.sprites.frame);
                            this.hasPart = SatelliteStack.sprites.frame;
                        }
                        this.collectState = null;
                        this.collectUnit = null;
                    }
                    break;
                }
                case 'placing': {
                    //console.log('placing', this.collectTime, this.collectUnit);
                    this.accelerate(0, 0);
                    this.collectTime -= deltaTime;
                    if (this.collectTime <= 0) {
                        //console.log('place', this.collectUnit);
                        if (this.collectUnit === true) {
                            const stack = new SatelliteStack(
                                this.game,
                                this.x,
                                this.y,
                                this.team,
                            );
                            stack.addPart(this.hasPart);
                            this.team.satelliteStack = stack;
                            this.game.gameObjects.push(stack);
                        } else {
                            this.collectUnit.addPart(this.hasPart);
                        }

                        this.hasPart = false;
                        this.collectState = null;
                        this.collectUnit = null;
                    }
                    break;
                }
                case 'holding': {
                    //console.log('holding... ' + this.timeToHold);
                    this.accelerate(0, 0);
                    this.timeToHold -= deltaTime;
                    if (this.timeToHold <= 0) {
                        //console.log('held!!! ' + this.team + ' wins!');
                        this.game.win({
                            team: this.team.id,
                        });
                    }
                    break;
                }
                default: {
                    let collision;
                    if (collision = this.canCollect()) {
                        //console.log('can collect');
                        this.collectState = 'collecting';
                        this.collectTime = this.timeToCollect;
                        this.collectUnit = collision;
                    } else if (collision = this.canSteal()) {
                        //console.log('can steal');
                        this.collectState = 'stealing';
                        this.collectTime = this.timeToCollect;
                        this.collectUnit = collision;
                    } else if (collision = this.canPlace()) {
                        //console.log('can place', collision);
                        this.collectState = 'placing';
                        this.collectTime = this.timeToCollect;
                        this.collectUnit = collision;
                    } else if (collision = this.canHold()) {
                        //console.log('can hold', collision);
                        this.collectState = 'holding';
                        this.collectUnit = collision;
                    } else {
                        // //console.log('can nothing');
                    }
                }
            }
        } else {
            this.collectState = null;
        }
    }

    canCollect() {
        if (this.hasPart) {
            return null;
        }

        const collisions = this.game.collisions[this.id];
        let i = collisions.length;
        while (i--) {
            if (collisions[i].type === 'SatellitePart') {
                return collisions[i];
            }
        }
        return null;
    }

    canSteal() {
        if (this.hasPart) {
            return null;
        }

        const collisions = this.game.collisions[this.id];
        let i = collisions.length;
        while (i--) {
            if (collisions[i].type === 'SatelliteStack' && collisions[i].team.id !== this.team.id) {
                return collisions[i];
            }
        }
        return null;
    }

    canPlace() {
        if (this.hasPart) {
            const collisions = this.game.collisions[this.id];
            let i = collisions.length;
            while (i--) {
                if (collisions[i].type === 'SatelliteStack' && collisions[i].team.id === this.team.id) {
                    return collisions[i];
                }
            }
            return this.team.satelliteStack === null;
        }
        return false;
    }

    canHold() {
        const collisions = this.game.collisions[this.id];
        let i = collisions.length;
        while (i--) {
            if (collisions[i].type === 'SatelliteStack' &&
                collisions[i].team.id === this.team.id &&
                collisions[i].isFullStack) {
                return collisions[i];
            }
        }
        return null;
    }

    onDie() {
        super.onDie();
        //TODO: yo collecti boi ded
    }

    ai() {
        // this.accelerate(0, 1);
        if(this.canCollect() || this.canPlace() || this.canSteal() || this.canHold()){
            // console.log('collecti boi doin da shootz');
            this.shooting = true;
            this.accelerate(0,0);
        }else {
            this.shooting = false;
            const target = this.findTargets();
            if(target){
                const direction = math.pointDirection(this.x,this.y,target.x,target.y);
                this.accelerate(math.lengthDirX(1000,direction),math.lengthDirY(1000,direction));
            }
        }
    }

    findTargets(){
        let targets = [];
        let i = this.game.gameObjects.length;
        this.shooting = false;
        if(this.hasPart){
            return this.team.satelliteStack;
        }
        while(i--){
            if(this.game.gameObjects[i].type === 'SatellitePart'){
                targets.push(this.game.gameObjects[i]);
            }
        }
        if(targets.length > 0){
            let target = targets[targets.length - 1];
            let distance = math.pointDistance(this.x,this.y,target.x,target.y);
            i = targets.length;
            while(i--){
                let potentialTarget = targets[i];
                if(math.pointDistance(this.x,this.y,potentialTarget.x,potentialTarget.y) < distance){
                    target = potentialTarget;
                }
            }
            return target;
        }else{
            i = this.game.gameObjects.length;
            while(i--){
                if(this.game.gameObjects[i].type === 'SatelliteStack' && this.game.gameObjects[i].team != this.team){
                    return this.game.gameObjects[i];
                }
            }
        }
    }

}