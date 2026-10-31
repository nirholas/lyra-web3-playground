import { defineConfig } from 'vitest/config';

export default defineConfig({
  // The facilitator is a standalone service nested in the playground repo; keep
  // vite from loading the playground's postcss.config.js.
  css: { postcss: { plugins: [] } },
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts'],
      exclude: ['src/index.ts'],
    },
    testTimeout: 30_000,
  },
});
