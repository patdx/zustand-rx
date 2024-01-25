import { defineConfig } from 'astro/config';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import { fileURLToPath } from 'url';

/// <reference types="vitest" />

const root = fileURLToPath(new URL('./', import.meta.url));

console.log(`root=${root}`);

// https://astro.build/config
export default defineConfig({
  // root,
  site: 'https://zustand-rx.vercel.app/',
  outDir: '../../dist/apps/zustand-rx-web',
  output: 'static',
  server: {
    port: 4200,
    host: 'localhost',
  },
  cacheDir: '../../node_modules/.vite/zustand-rx-web',
  vite: {
    cacheDir: '../../node_modules/.vite/zustand-rx-web',
    plugins: [nxViteTsPaths()],
  },
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },
  integrations: [react(), svelte()],
});
