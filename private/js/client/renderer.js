const assets = {
    1: '/images/placeholder.png',
    2: '/images/placeholder2.png',
    3: '/images/placeholder3.png',
    4: '/images/placeholder4.png',

    5: '/animations/collector-front-0.png',
    6: '/animations/collector-back-0.png',
    7: '/animations/collector-side-left-5.png',
    8: '/animations/collector-side-5.png',

    9: '/animations/collector2-front-0.png',
    10: '/animations/collector2-back-0.png',
    11: '/animations/collector2-side-left-5.png',
    12: '/animations/collector2-side-5.png',

    20: '/animations/kamikaze-front-0.png',
    21: '/animations/kamikaze-back-0.png',
    22: '/animations/kamikaze-side-left-0.png',
    23: '/animations/kamikaze-side-0.png',

    30: '/animations/kamikaze2-front-0.png',
    31: '/animations/kamikaze2-back-0.png',
    32: '/animations/kamikaze2-side-left-0.png',
    33: '/animations/kamikaze2-side-0.png',

    40: '/animations/shooter-front-walk-0.png',
    41: '/animations/shooter-back-walk-0.png',
    42: '/animations/shooter-side-walk-1.png',
    43: '/animations/shooter-side-walk-left-1.png',

    50: '/animations/shooter2-front-walk-0.png',
    51: '/animations/shooter2-back-walk-0.png',
    52: '/animations/shooter2-side-walk-1.png',
    53: '/animations/shooter2-side-walk-left-1.png',

    60: '/animations/tank-front-0.png',
    61: '/animations/tank-back-0.png',
    62: '/animations/tank-side-0.png',
    63: '/animations/tank-side-left-0.png',

    70: '/animations/tank2-front-0.png',
    71: '/animations/tank2-back-0.png',
    72: '/animations/tank2-side-0.png',
    73: '/animations/tank2-side-left-0.png',

    100: '/images/power-up-blue.png',
    101: '/images/power-up-yellow.png',
    102: '/images/power-up-blue.png',
    103: '/images/power-up-blue.png',
    104: '/images/power-up-blue.png',
    105: '/images/power-up-yellow.png',
    106: '/images/power-up-yellow.png',
    107: '/images/power-up-yellow.png',
    108: '/images/power-up-yellow.png',

    120: '/images/spawning-pool.png',

    130: '/images/impassable-crystals1.png',
    131: '/images/impassable-crystals2.png',
    132: '/images/impassable-rocks1.png',
    133: '/images/impassable-rocks2.png',

    200: '/images/satellite/collect-satellite-antenna.png',
    201: '/images/satellite/collect-satellite-dish.png',
    202: '/images/satellite/collect-satellite-frame.png',

    203: '/images/satellite/satellite-antenna-placed.png',
    204: '/images/satellite/satellite-dish-placed.png',
    205: '/images/satellite/satellite-frame-placed.png',

    206: '/images/satellite/satellite-antenna-frame.png',
    207: '/images/satellite/satellite-dish-frame.png',
    208: '/images/satellite/satellite-dish-antenna.png',

    209: '/images/satellite/satellite-complete.png',

    300: '/images/projectiles/tank-projectiles1.png',
    301: '/images/projectiles/tank-projectiles2.png',
    302: '/images/projectiles/tank-projectiles3.png',
    303: '/images/projectiles/tank-projectiles4.png',

    310: '/images/projectiles/tank2-projectiles1.png',
    311: '/images/projectiles/tank2-projectiles2.png',
    312: '/images/projectiles/tank2-projectiles3.png',
    313: '/images/projectiles/tank2-projectiles4.png',

    320: '/images/projectiles/tank3-projectiles1.png',
    321: '/images/projectiles/tank3-projectiles2.png',
    322: '/images/projectiles/tank3-projectiles3.png',

    701: '/images/bg-tiled-green-2.png',
    702: '/images/bg-tiled-green-3.png',
    703: '/images/bg-tiled-green-4.png',
    704: '/images/bg-tiled-green-5.png',

    800: '/images/white-circle.png',
    801: '/images/particles/circle-blur.png',
};

const animations = {
    // Collector
    5: [
        '/animations/collector-front-0.png',
        '/animations/collector-front-1.png',
    ],
    6: [
        '/animations/collector-back-0.png',
        '/animations/collector-back-1.png',
    ],
    9: [
        '/animations/collector2-front-0.png',
        '/animations/collector2-front-1.png',
    ],
    10: [
        '/animations/collector2-back-0.png',
        '/animations/collector2-back-1.png',
    ],
    7: [
        '/animations/collector-side-left-0.png',
        '/animations/collector-side-left-1.png',
        '/animations/collector-side-left-2.png',
        '/animations/collector-side-left-3.png',
        '/animations/collector-side-left-4.png',
        '/animations/collector-side-left-5.png',
    ],
    8: [
        '/animations/collector-side-0.png',
        '/animations/collector-side-1.png',
        '/animations/collector-side-2.png',
        '/animations/collector-side-3.png',
        '/animations/collector-side-4.png',
        '/animations/collector-side-5.png',
    ],
    11: [
        '/animations/collector2-side-left-0.png',
        '/animations/collector2-side-left-1.png',
        '/animations/collector2-side-left-2.png',
        '/animations/collector2-side-left-3.png',
        '/animations/collector2-side-left-4.png',
        '/animations/collector2-side-left-5.png',
    ],
    12: [
        '/animations/collector2-side-0.png',
        '/animations/collector2-side-1.png',
        '/animations/collector2-side-2.png',
        '/animations/collector2-side-3.png',
        '/animations/collector2-side-4.png',
        '/animations/collector2-side-5.png',
    ],

    // Tank
    60: [
        '/animations/tank-front-1.png',
        '/animations/tank-front-2.png',
    ],
    61: [
        '/animations/tank-back-1.png',
        '/animations/tank-back-2.png',
    ],
    62: [
        '/animations/tank-side-0.png',
        '/animations/tank-side-1.png',
    ],
    63: [
        '/animations/tank-side-left-0.png',
        '/animations/tank-side-left-1.png',
    ],
    70: [
        '/animations/tank2-front-1.png',
        '/animations/tank2-front-2.png',
    ],
    71: [
        '/animations/tank2-back-1.png',
        '/animations/tank2-back-2.png',
    ],
    72: [
        '/animations/tank2-side-0.png',
        '/animations/tank2-side-1.png',
    ],
    73: [
        '/animations/tank2-side-left-0.png',
        '/animations/tank2-side-left-1.png',
    ],

    // Shooter
    40: [
        '/animations/shooter-front-walk-0.png',
        '/animations/shooter-front-walk-1.png',
        '/animations/shooter-front-walk-2.png',
        '/animations/shooter-front-walk-3.png',
        '/animations/shooter-front-walk-4.png',
        '/animations/shooter-front-walk-5.png',
        '/animations/shooter-front-walk-6.png',
        '/animations/shooter-front-walk-7.png',
        '/animations/shooter-front-walk-8.png',
        '/animations/shooter-front-walk-9.png',
    ],
    41: [
        '/animations/shooter-back-walk-0.png',
        '/animations/shooter-back-walk-1.png',
        '/animations/shooter-back-walk-2.png',
        '/animations/shooter-back-walk-3.png',
        '/animations/shooter-back-walk-4.png',
        '/animations/shooter-back-walk-5.png',
        '/animations/shooter-back-walk-6.png',
        '/animations/shooter-back-walk-7.png',
        '/animations/shooter-back-walk-8.png',
        '/animations/shooter-back-walk-9.png',
    ],
    42: [
        '/animations/shooter-side-walk-0.png',
        '/animations/shooter-side-walk-1.png',
        '/animations/shooter-side-walk-2.png',
        '/animations/shooter-side-walk-3.png',
        '/animations/shooter-side-walk-4.png',
        '/animations/shooter-side-walk-5.png',
        '/animations/shooter-side-walk-6.png',
        '/animations/shooter-side-walk-7.png',
        '/animations/shooter-side-walk-8.png',
    ],
    43: [
        '/animations/shooter-side-walk-left-0.png',
        '/animations/shooter-side-walk-left-1.png',
        '/animations/shooter-side-walk-left-2.png',
        '/animations/shooter-side-walk-left-3.png',
        '/animations/shooter-side-walk-left-4.png',
        '/animations/shooter-side-walk-left-5.png',
        '/animations/shooter-side-walk-left-6.png',
        '/animations/shooter-side-walk-left-7.png',
        '/animations/shooter-side-walk-left-8.png',
    ],

    50: [
        '/animations/shooter2-front-walk-0.png',
        '/animations/shooter2-front-walk-1.png',
        '/animations/shooter2-front-walk-2.png',
        '/animations/shooter2-front-walk-3.png',
        '/animations/shooter2-front-walk-4.png',
        '/animations/shooter2-front-walk-5.png',
        '/animations/shooter2-front-walk-6.png',
        '/animations/shooter2-front-walk-7.png',
        '/animations/shooter2-front-walk-8.png',
        '/animations/shooter2-front-walk-9.png',
    ],
    51: [
        '/animations/shooter2-back-walk-0.png',
        '/animations/shooter2-back-walk-1.png',
        '/animations/shooter2-back-walk-2.png',
        '/animations/shooter2-back-walk-3.png',
        '/animations/shooter2-back-walk-4.png',
        '/animations/shooter2-back-walk-5.png',
        '/animations/shooter2-back-walk-6.png',
        '/animations/shooter2-back-walk-7.png',
        '/animations/shooter2-back-walk-8.png',
    ],
    52: [
        '/animations/shooter2-side-walk-0.png',
        '/animations/shooter2-side-walk-1.png',
        '/animations/shooter2-side-walk-2.png',
        '/animations/shooter2-side-walk-3.png',
        '/animations/shooter2-side-walk-4.png',
        '/animations/shooter2-side-walk-5.png',
        '/animations/shooter2-side-walk-6.png',
        '/animations/shooter2-side-walk-7.png',
        '/animations/shooter2-side-walk-8.png',
        '/animations/shooter2-side-walk-9.png',
    ],
    53: [
        '/animations/shooter2-side-walk-left-0.png',
        '/animations/shooter2-side-walk-left-1.png',
        '/animations/shooter2-side-walk-left-2.png',
        '/animations/shooter2-side-walk-left-3.png',
        '/animations/shooter2-side-walk-left-4.png',
        '/animations/shooter2-side-walk-left-5.png',
        '/animations/shooter2-side-walk-left-6.png',
        '/animations/shooter2-side-walk-left-7.png',
        '/animations/shooter2-side-walk-left-8.png',
        '/animations/shooter2-side-walk-left-9.png',
    ],

    // Kamikaze
    20: [
        '/animations/kamikaze-front-0.png',
        '/animations/kamikaze-front-1.png',
        '/animations/kamikaze-front-2.png',
        '/animations/kamikaze-front-3.png',
        '/animations/kamikaze-front-4.png',
        '/animations/kamikaze-front-5.png',
        '/animations/kamikaze-front-6.png',
        '/animations/kamikaze-front-7.png',
    ],
    21: [
        '/animations/kamikaze-back-0.png',
        '/animations/kamikaze-back-1.png',
        '/animations/kamikaze-back-2.png',
        '/animations/kamikaze-back-3.png',
        '/animations/kamikaze-back-4.png',
        '/animations/kamikaze-back-5.png',
        '/animations/kamikaze-back-6.png',
        '/animations/kamikaze-back-7.png',
    ],
    22: [
        '/animations/kamikaze-side-left-0.png',
        '/animations/kamikaze-side-left-1.png',
        '/animations/kamikaze-side-left-2.png',
        '/animations/kamikaze-side-left-3.png',
        '/animations/kamikaze-side-left-4.png',
        '/animations/kamikaze-side-left-5.png',
        '/animations/kamikaze-side-left-6.png',
        '/animations/kamikaze-side-left-7.png',
    ],
    23: [
        '/animations/kamikaze-side-0.png',
        '/animations/kamikaze-side-1.png',
        '/animations/kamikaze-side-2.png',
        '/animations/kamikaze-side-3.png',
        '/animations/kamikaze-side-4.png',
        '/animations/kamikaze-side-5.png',
        '/animations/kamikaze-side-6.png',
        '/animations/kamikaze-side-7.png',
    ],

    30: [
        '/animations/kamikaze2-front-0.png',
        '/animations/kamikaze2-front-1.png',
        '/animations/kamikaze2-front-2.png',
        '/animations/kamikaze2-front-3.png',
        '/animations/kamikaze2-front-4.png',
        '/animations/kamikaze2-front-5.png',
        '/animations/kamikaze2-front-6.png',
        '/animations/kamikaze2-front-7.png',
    ],
    31: [
        '/animations/kamikaze2-back-0.png',
        '/animations/kamikaze2-back-1.png',
        '/animations/kamikaze2-back-2.png',
        '/animations/kamikaze2-back-3.png',
        '/animations/kamikaze2-back-4.png',
        '/animations/kamikaze2-back-5.png',
        '/animations/kamikaze2-back-6.png',
        '/animations/kamikaze2-back-7.png',
    ],
    32: [
        '/animations/kamikaze2-side-left-0.png',
        '/animations/kamikaze2-side-left-1.png',
        '/animations/kamikaze2-side-left-2.png',
        '/animations/kamikaze2-side-left-3.png',
        '/animations/kamikaze2-side-left-4.png',
        '/animations/kamikaze2-side-left-5.png',
        '/animations/kamikaze2-side-left-6.png',
        '/animations/kamikaze2-side-left-7.png',
    ],
    33: [
        '/animations/kamikaze2-side-0.png',
        '/animations/kamikaze2-side-1.png',
        '/animations/kamikaze2-side-2.png',
        '/animations/kamikaze2-side-3.png',
        '/animations/kamikaze2-side-4.png',
        '/animations/kamikaze2-side-5.png',
        '/animations/kamikaze2-side-6.png',
        '/animations/kamikaze2-side-7.png',
    ],
};

class Renderer {
    constructor(gameContainer) {
        this.sprites = {};
        this.layers = {};
        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;

        this.textures = {};
        for (let key in assets) {
            this.textures[key] = PIXI.Texture.fromImage(assets[key]);
        }

        this.animations = {};
        for (let key in animations) {
            animations[key].map((frame) => {
                if (!this.animations[key]) {
                    this.animations[key] = [];
                }
                this.animations[key].push(PIXI.Texture.fromImage(frame));
            });
        }

        this.renderer = new PIXI.Application({
            width: this.width,
            height: this.height,
            // antialias: false,
            // forceFXAA: false,
        });

        // Init layers
        this.layers.background = new PIXI.Container();
        this.renderer.stage.addChild(this.layers.background);

        this.layers.particles = new PIXI.Container();
        this.renderer.stage.addChild(this.layers.particles);

        this.layers.map = new PIXI.Container();
        this.renderer.stage.addChild(this.layers.map);

        this.layers.foreground = new PIXI.Container();
        this.renderer.stage.addChild(this.layers.foreground);

        // Init background
        // let background1 = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(assets[702]), 2000, 2000);
        // background1.setTransform(0, 0);
        // this.layers.background.addChild(background1);

        this.createBackground(701, 0.005);
        this.createBackground(704, -0.003);
        this.createBackground(703, 0.003);

        // Init effects
        const effects = new Effects(this.renderer, this.layers.particles);
        // effects.spawnRandomOrbs(1, 200, [
        //     0x379392,
        //     0xE8F895,
        //     0x8BAB78,
        //     0xFFFFFF,
        // ]);
        this.explode = [
            effects.starburst(1, [assets[300]]),
            effects.starburst(2, [assets[301]]),
            effects.starburst(3, [assets[302]]),
            effects.starburst(4, [assets[303]]),
            effects.starburst(5, [assets[310]]),
            effects.starburst(6, [assets[311]]),
            effects.starburst(7, [assets[312]]),
            effects.starburst(8, [assets[313]]),
        ];
        let bloodOptions = {
            alpha: {
                start: 1,
                end: 1,
            },
            scale: {
                start: 2,
                end: 1,
            },
            color: {
                start: "ffffff",
                end: "ffffff",
            },
            speed: {
                start: 200,
                end: 0,
            },
            startRotation: {
                min: 0,
                max: 360,
            },
            rotationSpeed: {
                min: 0,
                max: 0,
            },
            lifetime: {
                min: 0.1,
                max: 1,
            },
            frequency: 0.008,
            emitterLifetime: 0.1,
            maxParticles: 5,
            pos: {
                x: 0,
                y: 0,
            },
            addAtBack: false,
            spawnType: "circle",
            spawnCircle: {
                x: 0,
                y: 0,
                r: 10,
            }
        };
        this.blood = [
            effects.starburst(9, [assets[320]], bloodOptions),
            effects.starburst(10, [assets[321]], bloodOptions),
            effects.starburst(11, [assets[322]], bloodOptions),
        ];

        window.addEventListener('resize', this.resizeViewport.bind(this));
        gameContainer.appendChild(this.renderer.view);
    }

    createBackground(asset, step) {
        let background2 = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(assets[asset]), 4000, 4000);
        let x = -1000;
        let y = -1000;
        let i = 0;
        background2.setTransform(x + Math.sin(i) * 200, y + Math.cos(i) * 200);
        window.setInterval(() => {
            i += step * Math.random();
            background2.setTransform(x + Math.sin(i) * 200, y + Math.cos(i) * 200);
        }, 1000 / 60);
        this.layers.background.addChild(background2);
    }

    cameraZoomAbsolute(zoom) {
        // if (!zoom) {
        //     return null;
        // }

        // this.renderer.stage.setTransform(this.renderer.stage.x, this.renderer.stage.y, zoom, zoom);
    }

    cameraZoomRelative(zoomFactor) {
        // if (!zoomFactor) {
        //     return null;
        // }

        // let zoomX = this.renderer.stage.scale.x + zoomFactor;
        // let zoomY = this.renderer.stage.scale.y + zoomFactor;
        // this.renderer.stage.setTransform(this.renderer.stage.x, this.renderer.stage.y, zoomX, zoomY);
    }

    cameraPanAbsolute(x, y) {
        this.layers.foreground.setTransform(-x, -y);
        this.layers.background.setTransform(-x, -y);
        this.layers.map.setTransform(-x, -y);
        this.layers.particles.setTransform(-x, -y);
    }

    // cameraPanRelative(x, y) {
    //     if (!x || !y) {
    //         return null;
    //     }

    //     this.layers.foreground.setTransform((this.layers.foreground.x + x), (this.layers.foreground.y + y));
    //     this.layers.background.setTransform((this.layers.background.x + (x * 0.1)), (this.layers.background.y + (y * 0.1)));
    // }

    resizeViewport() {
        this.renderer.renderer.resize(document.body.clientWidth, document.body.clientHeight);
    }

    createSprite(id, spriteAsset, x = 0, y = 0, anchor = 0.5, layer = 'foreground') {
        if (!spriteAsset) {
            throw new Error('Missing sprite');
        }
        const sprite = new PIXI.extras.AnimatedSprite(this.animations[spriteAsset] || [this.textures[spriteAsset]]);

        sprite.anchor.set(0.5);
        sprite.animationId = null;
        sprite.stillId = null;
        sprite.animationSpeed = 0.25;
        sprite.x = x;
        sprite.y = y;
        sprite.layer = layer;

        if (this.animations[spriteAsset]) {
            sprite.animationId = spriteAsset;
            sprite.play();
        } else {
            sprite.stillId = spriteAsset;
        }
        this.layers[layer].addChild(sprite);

        return sprite;
    }

    moveSprite(id, x, y, layer, spriteAsset, moving) {
        if (!this.sprites[id]) {
            this.sprites[id] = this.createSprite(id, spriteAsset, x, y, 0.5, layer);
            return;
        }

        this.sprites[id].x = x;
        this.sprites[id].y = y;

        let currentAnimationId = this.sprites[id].animationId;

        if (moving && this.animations[spriteAsset]) {
            if (currentAnimationId === spriteAsset) {
                return null;
            }

            this.sprites[id].textures = this.animations[spriteAsset];
            this.sprites[id].animationId = spriteAsset;
            this.sprites[id].stillId = null;
            this.sprites[id].play();
        } else {
            this.sprites[id].textures = [this.textures[spriteAsset]];
            this.sprites[id].animationId = null;
            this.sprites[id].stillId = spriteAsset;
            this.sprites[id].stop();
        }
    }

    sortSprites() {
        this.layers.foreground.children.sort((a, b) => {
            return a.y - b.y;
        })
        this.layers.map.children.sort((a, b) => {
            return a.y - b.y;
        })
    }

    cullSprites(gameObjects) {
        for (let id in this.sprites) {
            let found = false;
            let i = gameObjects.length;
            while (i--) {
                if (gameObjects[i][0] == id) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                if (this.sprites[id].layer) {
                    this.layers[this.sprites[id].layer].removeChild(this.sprites[id]);
                    delete this.sprites[id];
                }
            }
        }
    }
}
