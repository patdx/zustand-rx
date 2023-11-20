import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  // sourcemap: true,
  clean: true,
  outDir: '../../dist/libs/zustand-rx',
  format: ['cjs', 'esm'],
  target: 'node18',
  dts: true,
});
