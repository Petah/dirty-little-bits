class Renderer {
    constructor(width = 1270, height = 720, options = {}) {
        this.sprites = {};
        this.layers = {};
        this.width = width;
        this.height = height;
        this.options = options;
    }

    getSprites() {
        return this.sprites;
    }

    setSprites(sprites = {}) {
        this.sprites = sprites;

        return this;
    }

    getSprite(id) {
        return this.sprites[id];
    }

    addSprite(id, assetPath, xPos = 0, yPos = 0, anchor = 0.5, layer = 'foreground') {
        this.sprites[id] = PIXI.Sprite.fromImage(assetPath);
        this.sprites[id].anchor.set(0.5);
        this.sprites[id].x = xPos;
        this.sprites[id].y = yPos;

        switch (layer) {
            case 'background': {
                this.getBackground().addChild(this.sprites[id]);
            }
            case 'foreground': {
                this.getForeground().addChild(this.sprites[id]);
            }
        }

        return this.sprites[id];
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;

        return this;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;

        return this;
    }

    getOptions() {
        return this.options;
    }

    setOptions(options) {
        this.options = options;

        return this;
    }

    getRenderer() {
        if (!this.renderer) {
            this.renderer = new PIXI.Application(this.getWidth(), this.getHeight(), this.getOptions());
        }

        return this.renderer;
    }

    getView() {
        return this.getRenderer().view;
    }

    getBackground() {
        if (!this.layers.background) {
            this.layers.background = new PIXI.Container();
            this.getRenderer().stage.addChild(this.layers.background);
        }

        return this.layers.background;
    }

    getForeground() {
        if (!this.layers.foreground) {
            this.layers.foreground = new PIXI.Container();
            this.getRenderer().stage.addChild(this.layers.foreground);
        }

        return this.layers.foreground;
    }
}

// Init renderer
const renderer = new Renderer();
document.body.appendChild(renderer.getView());

// Add bunny
let bunny = renderer.addSprite(1, '/assets/img/bunny.png', 400, 300);
setInterval(() => {
    bunny.x = bunny.x + 1;
    bunny.y = bunny.y + 1;
}, 20);

// Create WebSocket connection.
const socket = new WebSocket('ws://127.0.0.1:8081');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
