import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { seoBuildPlugin } from './src/build-seo.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoBuildPlugin()],
  build: {
    sourcemap: false,
    reportCompressedSize: true,
    rollupOptions: { output: { manualChunks: (id) => id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom') ? 'vendor' : undefined } },
  },
})
