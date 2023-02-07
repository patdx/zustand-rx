import { defineConfig } from 'astro/config';
import viteTsConfigPaths from 'vite-tsconfig-paths';

/// <reference types="vitest" />
import react from '@astrojs/react';

// https://astro.build/config
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://zustand-rx.vercel.app/',
  output: 'static',
  // build: {
  //   // Example: Generate `page.html` instead of `page/index.html` during build.
  //   format: 'file',
  // },
  server: {
    port: 4200,
    host: 'localhost',
  },
  vite: {
    plugins: [
      viteTsConfigPaths({
        root: '../../',
      }) as any,
    ],
    test: {
      globals: true,
      cache: {
        dir: '../../node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
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
