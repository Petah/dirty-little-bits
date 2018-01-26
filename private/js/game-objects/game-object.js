module.exports = class GameObject {
    constructor(
        x,
        y,
        direction,
        sprite
    ){
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.direction = direction;
    }
}