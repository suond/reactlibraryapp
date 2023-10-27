import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define:{
    'process.env': process.env
  },
  plugins: [react()],
  server:{
    https: {
      key: './ssl-localhost/localhost.key',
      cert: './ssl-localhost/localhost.crt'
    }
  }
})
