import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  cacheDir: '../../../node_modules/.vite/frontend-sso',

  server: {
    port: 3040,
    host: 'localhost',
  },

  preview: {
    port: 3030,
    host: 'localhost',
  },

  plugins: [
    TanStackRouterVite(),
    react(),
  ],

  define: {
    global: {},
  },
});
