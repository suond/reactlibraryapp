import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define:{
    'process.env': process.env
  },
  plugins: [react()],
  server:{
    host: true,
    strictPort: true,
    watch:{
      usePolling: true
    },
    // proxy:{
    //   '/api':{
    //     target: 'https://localhost:8443',
    //     changeOrigin: true,
    //     secure: false
    //   }
    // },
    port: 3000,
    https: {
      key: './ssl-localhost/localhost.key',
      cert: './ssl-localhost/localhost.crt'
    }
  }
})
