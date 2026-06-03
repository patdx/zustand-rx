// @ts-check
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig({
  files: [
    'libs/zustand-rx/src/**/*.ts',
    'apps/zustand-rx-web/**/*.{js,ts,jsx,tsx}',
  ],
  ignores: [
    '**/dist/**',
    '**/coverage/**',
    '**/public/**',
    '**/*.config.*',
    '**/*.d.ts',
  ],
  extends: [js.configs.recommended, tseslint.configs.recommended],
});
