import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,       // Enables globals like `test` and `expect`.
    environment: 'jsdom', // Simulate a browser to test React components
    setupFiles: './setupTests.js'
  }
});