class Effects {
    constructor(renderer, container) {
        this.renderer = renderer;
        this.container = container;
        this.groups = {};
    }

    getParticleConfig(config) {
        return Object.assign({
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
            maxParticles: 20,
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
        }, config);
    }

    starburst(effectId = null, assets, config = {}) {
        effectId = effectId || this.getRandomId();
        this.groups[effectId] = {};

        this.groups[effectId].textures = assets.map((assetId) => PIXI.Texture.fromImage(assetId));
        this.groups[effectId].container = new PIXI.particles.ParticleContainer(1000, {
            scale: true,
            position: true,
            rotation: true,
            uvs: true,
            alpha: true
        });
        this.container.addChild(this.groups[effectId].container);

        let elapsed = Date.now();
        this.groups[effectId].update = () => {
            let updateId = requestAnimationFrame(this.groups[effectId].update);
            let now = Date.now();
            this.groups[effectId].emitter.update((now - elapsed) * 0.001);
            elapsed = now;
        };

        this.groups[effectId].emit = (xPos, yPos) => {
            this.groups[effectId].emitter.emit = true;
            this.groups[effectId].emitter.resetPositionTracking();
            this.groups[effectId].emitter.updateOwnerPos(xPos, yPos);
        };

        this.groups[effectId].emitter = new PIXI.particles.Emitter(
            this.groups[effectId].container,
            this.groups[effectId].textures,
            this.getParticleConfig(config)
        );

        this.groups[effectId].emitter.particleConstructor = PIXI.particles.PathParticle;
        this.groups[effectId].emitter.updateOwnerPos(this.container.width / 2, this.container.height / 2);

        this.groups[effectId].update();

        return this.groups[effectId];
    }

    spawnRandomCircles(effectId, assetId, maxCount, colors = []) {
        this.groups[effectId] = {};
        this.groups[effectId].particles = new PIXI.particles.ParticleContainer(maxCount, {
            scale: true,
            position: true,
            uvs: true,
            alpha: true,
        });

        this.container.addChild(this.groups[effectId].particles);

        let circles = [];
        let radiusGroups = [
            [0.5, 1, 80],
            [0.25, 0.5, 320],
        ];

        radiusGroups.map((group) => {
            for (let i = 0; i < group[2]; i++) {
                let circle = PIXI.Sprite.fromImage(assetId);

                circle.scaleMin = group[0];
                circle.scaleMax = group[1];

                circle.x = Math.random() * 2000;
                circle.y = Math.random() * 2000;
                circle.anchor.set(0.5);
                circle.scale.set(this.getRandomBetweenLimit(circle.scaleMin, circle.scaleMax));
                circle.alpha = this.getRandomBetweenLimit(0.25, 0.75);

                circle.tint = colors[Math.floor(Math.random() * colors.length)];

                circle.direction = Math.random() * Math.PI * 2;
                circle.turningSpeed = Math.random() - 0.8;
                circle.speed = (2 + Math.random() * 2) * 0.05;
                circle.offset = Math.random() * 500;

                circles.push(circle);
                this.groups[effectId].particles.addChild(circle);
            }
        });

        let tick = 0;
        this.renderer.ticker.add(() => {
            for (let i = 0; i < circles.length; i++) {
                console.log('Animating', circles[i]);
                // circles[i].scale.set(0.95 + Math.sin(tick + circles[i].offset) * 0.05);
                circles[i].direction += circles[i].turningSpeed * 0.01;
                circles[i].x += Math.sin(circles[i].direction) * (circles[i].speed * circles[i].scale.y);
                circles[i].y += Math.cos(circles[i].direction) * (circles[i].speed * circles[i].scale.y);
                circles[i].rotation = -circles[i].direction + Math.PI;
            }

            tick += 0.1;
        });
    }

    getEffect(effectId) {
        return this.groups[effectId];
    }

    getRandomBetweenLimit(min, max) {
        return Math.random() * (max - min) + min;
    }
}
