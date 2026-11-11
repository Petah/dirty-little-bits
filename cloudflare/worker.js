// Cloudflare Worker for Dirty little bits.
// Static files come from public/. Each visit to /ws gets its own Durable Object
// running the original 2018 game server, because the game resets the world
// whenever a screen connects (it was built for one shared screen with gamepads).
import './globals.js';
import { DurableObject } from 'cloudflare:workers';
import ws from './ws-shim.js';
import Game from '../private/js/server/game.js';

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname === '/ws') {
            if (request.headers.get('Upgrade') !== 'websocket') {
                return new Response('Expected a WebSocket', { status: 426 });
            }
            return env.GAME.get(env.GAME.newUniqueId()).fetch(request);
        }
        return env.ASSETS.fetch(request);
    },
};

export class GameRoom extends DurableObject {
    constructor(ctx, env) {
        super(ctx, env);
        this.game = new Game();
        this.game.start();
        this.connections = 0;
    }

    async fetch() {
        const [client, server] = Object.values(new WebSocketPair());
        server.accept();
        this.connections++;
        if (this.game.stopped) {
            this.game.runLoop();
        }
        const socket = ws.server.accept(server);
        let closed = false;
        const close = () => {
            if (closed) {
                return;
            }
            closed = true;
            socket.emit('close');
            this.connections--;
            if (this.connections === 0) {
                this.game.stop();
            }
        };
        server.addEventListener('message', (e) => socket.emit('message', e.data));
        server.addEventListener('close', close);
        server.addEventListener('error', close);
        return new Response(null, { status: 101, webSocket: client });
    }
}
