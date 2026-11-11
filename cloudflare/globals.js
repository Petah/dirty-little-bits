// Node features the 2018 server code expects, for the Cloudflare runtime.
// setImmediate ran the game loop flat out; a 16 ms timer (about 60 updates a second)
// is plenty, because the game scales every step by the elapsed time.
globalThis.setImmediate = (fn) => setTimeout(fn, 16);
globalThis.clearImmediate = (id) => clearTimeout(id);
globalThis.process = globalThis.process || {};
globalThis.process.hrtime = () => {
    const ms = performance.now();
    return [Math.floor(ms / 1000), Math.round((ms % 1000) * 1e6)];
};
// The server logs every spawn; keep the Cloudflare logs for real errors.
console.log = () => {};
