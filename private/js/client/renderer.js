module.exports = class Renderer {
    constructor(width = 800, height = 600, options = {}) {
        this.sprites = {};
        this.width = width;
        this.height = height;
        this.options = options;
    }

    get sprites() {
        return this.sprites;
    }

    getSprite(id) {
        return this.sprites[id];
    }

    addSprite(id, assetPath, options = {}) {
        this.sprites[id] = Object.assign({}, PIXI.Sprite.fromImage(assetPath), options);

        this.renderer.stage.addChild(this.sprites[id]);

        return this.sprites[id];
    }

    get width() {
        return this.width;
    }

    set width(width) {
        this.width = width;

        return this;
    }

    get height() {
        return this.height;
    }

    set height(height) {
        this.height = height;

        return this;
    }

    get options() {
        return this.options;
    }

    set options(options) {
        this.options = options;

        return this;
    }

    get renderer() {
        if (!this.renderer) {
            this.renderer = new PIXI.Application(width, height, options);
        }

        return this.renderer;
    }
};
