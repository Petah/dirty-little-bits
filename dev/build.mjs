// Replaces the old Gulp 3 build (which doesn't run on current Node).
// Same output: public/vendor.js (PixiJS) and public/ggj18.js (all client files joined).
// Modern browsers run the code as written, so the Babel step is skipped.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const modules = join(here, 'node_modules');

const files = (dir) => readdirSync(dir).sort().flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : name.endsWith('.js') ? [path] : [];
});

writeFileSync(join(root, 'public', 'vendor.js'), [
    join(modules, 'pixi.js', 'dist', 'pixi.min.js'),
    join(modules, 'pixi-particles', 'dist', 'pixi-particles.min.js'),
].map((f) => readFileSync(f, 'utf8')).join('\n;\n'));

const client = files(join(root, 'private', 'js', 'client'));
writeFileSync(join(root, 'public', 'ggj18.js'), client.map((f) => `// ${f.slice(root.length + 1)}\n${readFileSync(f, 'utf8')}`).join('\n;\n'));
console.log(`Built public/vendor.js and public/ggj18.js from ${client.length} client files`);
