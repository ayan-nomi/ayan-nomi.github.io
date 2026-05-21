import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: 'src',
  envDir: '../',
  build: {
    outDir: '../', // Output to the repo root folder
    emptyOutDir: false, // Prevent deleting important folders like node_modules or .git
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        playground: resolve(__dirname, 'src/playground.html'),
        services: resolve(__dirname, 'src/services.html')
      }
    }
  }
})
