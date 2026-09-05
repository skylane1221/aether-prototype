import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    testTimeout: 15000,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/**',
        'dist/**',
        'src/test/**',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.d.ts',
        'vite.config.ts',
        'vitest.config.ts',
        'eslint.config.js',
        'postcss.config.js',
        'tailwind.config.js',
      ],
      thresholds: {
        statements: 15,
        branches: 15,
        functions: 10,
        lines: 15,
      },
    },
  },
});
