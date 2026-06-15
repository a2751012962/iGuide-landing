import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
// Activates the `ssgOptions` augmentation on Vite's UserConfig.
import type {} from 'vite-react-ssg';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    // Root-relative so assets resolve under the custom domain (iguide.chat)
    // and prerendered HTML uses root-relative asset paths.
    base: '/',
    plugins: [react(), tailwindcss()],
    // Static-site-generation: prerender every route to real HTML at build time.
    ssgOptions: {
      script: 'async',
      dirStyle: 'nested', // /en/about -> /en/about/index.html (clean URLs)
      formatting: 'none',
    },
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
