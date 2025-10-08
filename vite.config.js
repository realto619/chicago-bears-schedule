import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '',
  publicDir: '2025',
  build: {
    emptyOutDir: true,
    outDir: '../2025'
  }
})
