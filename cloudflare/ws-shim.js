// Stands in for the 'ws' package: the same calls the game server makes
// (Server, on, send, readyState, OPEN), backed by Cloudflare WebSockets.
class Socket {
    constructor(ws) {
        this.ws = ws;
        this.handlers = {};
    }

    get readyState() {
        return this.ws.readyState;
    }

    on(event, fn) {
        (this.handlers[event] = this.handlers[event] || []).push(fn);
    }

    send(data) {
        try {
            this.ws.send(data);
        } catch (e) {
            // The player has gone; the close handler cleans up.
        }
    }

    emit(event, ...args) {
        for (const fn of this.handlers[event] || []) {
            try {
                fn(...args);
            } catch (e) {
                console.error('Handler failed', event, e);
            }
        }
    }
}

class Server {
    constructor() {
        this.handlers = {};
        WebSocket.server = this;
    }

    on(event, fn) {
        (this.handlers[event] = this.handlers[event] || []).push(fn);
    }

    close(callback) {
        if (callback) {
            callback();
        }
    }

    accept(ws) {
        const socket = new Socket(ws);
        for (const fn of this.handlers.connection || []) {
            fn(socket);
        }
        return socket;
    }
}

const WebSocket = { OPEN: 1, Server, server: null };

module.exports = WebSocket;
