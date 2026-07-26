import { build } from 'astro';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, 'dist');

console.log('Building Astro to:', outDir);

await build({
  root: root,
  outDir: outDir
});

console.log('Astro build complete.');
