import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6073
  },
  preview: {
    port: 6073,
    allowedHosts:['*','https://prestorix.com','https://www.prestorix.com','https://api.prestorix.com','prestorix.com','www.prestorix.com'],
  },
})
