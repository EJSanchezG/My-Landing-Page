import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  site: 'https://EJSanchezG.github.io',
  base: '/My-Landing-Page/',
  outDir: fileURLToPath(new URL('./dist', import.meta.url)),
  integrations: [
    alpinejs({
      entrypoint: '/src/entrypoint'
    })
  ],
  build: {
    assets: 'assets'
  },
  server: {
    port: 3000
  }
});
