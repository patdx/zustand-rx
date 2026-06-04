/// <reference types='vitest' />

import { defineConfig } from 'vitest/config';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/zustand-rx',

  test: {
    globals: true,
    typecheck: {
      enabled: true,
      tsconfig: './tsconfig.spec.json',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/libs/zustand-rx',
      provider: 'v8',
    },
  },
});
