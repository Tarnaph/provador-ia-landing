import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  base: './', // Required for file:// compatibility and static hosting (per plan + STACK best practices)
  build: {
    assetsInlineLimit: 0, // Never inline videos/images as base64 — critical for this media-heavy landing
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
