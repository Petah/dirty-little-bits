const WebSocket = require('ws');
const Renderer = require('../client/renderer');

const wss = new WebSocket.Server({
    port: 8081,
 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

module.exports = class Game {
    start() {
        console.log('Game start');

        this.gameObjects = [];
        this.renderer = new Renderer();
        document.body.appendChild(this.renderer.view);

        let previousTime = 0;
        const gameLoop = () => {
            const hrTime = process.hrtime();
            const currentTime = hrTime[0] * 1000000 + hrTime[1] / 1000;
            const deltaTime = currentTime - previousTime;
            previousTime = currentTime;
            this.loop(deltaTime);
            this.id = setImmediate(gameLoop);
        };
        this.id = setImmediate(gameLoop);
    }

    stop() {
        console.log('');
        console.log('Game stop');

        clearImmediate(this.id);
        this.id = null;
    }

    loop(deltaTime) {
        // process.stdout.write('.');
        let i = this.gameObjects.length;
        while (i--) {
            this.gameObjects[i].loop(deltaTime);
        }
    }
}
