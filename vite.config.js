import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Esto permite a Vite servir archivos fuera de su raíz predeterminada
      strict: false, 
    },
  },
})