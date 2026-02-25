// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        treeshake: true,
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            lucide: ['lucide-react']
          }
        }
      }
    }
  }
});
