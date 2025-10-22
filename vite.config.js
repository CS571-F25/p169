import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/p169/',
  build: {
    outDir: 'docs'
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['color-functions', 'global-builtin', 'import']
      }
    }
  }
})