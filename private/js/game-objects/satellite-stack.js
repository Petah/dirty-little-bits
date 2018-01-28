const GameObject = require('./game-object');

const sprites = {
    antenna: 200,
    dish: 201,
    frame: 202,

    antennaPlaced: 203,
    dishPlaced: 204,
    framePlaced: 205,

    antennaDishPlaced: 208,
    antennaFramePlaced: 206,
    dishFramePlaced: 207,

    complete: 209,
};


class SatelliteStack extends GameObject {
    constructor(
        game,
        x,
        y,
        team,
    ) {
        super(game, x, y, 0, 2, 5);
        this.team = team;
        this.type = 'SatelliteStack';
        this.layer = 'map';
        this.parts = {};
        this.isFullStack = false;
    }

    addPart(sprite) {
        this.parts[sprite] = true;
        this.updateSprite();
    }

    removePart(sprite) {
        this.parts[sprite] = false;
        this.isComplete = false;
        //console.log(this.parts[sprites.antenna] , this.parts[sprites.dish] , this.parts[sprites.frame]);
        if (!this.parts[sprites.antenna] && !this.parts[sprites.dish] && !this.parts[sprites.frame]) {
            this.game.removeGameObject(this);
            return;
        }
        this.updateSprite();
    }

    updateSprite() {
        if (this.parts[sprites.antenna] && this.parts[sprites.dish] && this.parts[sprites.frame]) {
            this.sprite = sprites.complete;
            this.isFullStack = true;
            this.game.playAudioAtPoint('radar', this.x, this.y);
        } else if (this.parts[sprites.antenna] && this.parts[sprites.dish]) {
            this.sprite = sprites.antennaDishPlaced;
        } else if (this.parts[sprites.antenna] && this.parts[sprites.frame]) {
            this.sprite = sprites.antennaFramePlaced;
        } else if (this.parts[sprites.dish] && this.parts[sprites.frame]) {
            this.sprite = sprites.dishFramePlaced;
        } else if (this.parts[sprites.antenna]) {
            this.sprite = sprites.antennaPlaced;
        } else if (this.parts[sprites.dish]) {
            this.sprite = sprites.dishPlaced;
        } else if (this.parts[sprites.frame]) {
            this.sprite = sprites.framePlaced;
        }
    }


}

SatelliteStack.sprites = sprites;

module.exports = SatelliteStack;
