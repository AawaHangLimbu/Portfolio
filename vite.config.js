import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes asset paths relative so the build works on
// GitHub Pages (project pages) and any other static host.
export default defineConfig({
  plugins: [react()],
  base: './',
})
