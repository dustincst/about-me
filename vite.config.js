import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "about-me",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  }
})
