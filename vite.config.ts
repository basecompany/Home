import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
    server: {
        port: 5173,        // fixed port for this app
        strictPort: true   // fail if port is taken, no +1
    }
})
