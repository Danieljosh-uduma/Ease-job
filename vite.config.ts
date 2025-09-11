import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';




// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   port: 3000,
  //   open: true,
  //   cors: true,
  // },
  plugins: [react(), tailwindcss(), svgr(), ViteImageOptimizer({
    jpg:{
      quality:50
    },
    png:{
      quality:50
    }
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
