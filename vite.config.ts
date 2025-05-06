import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:8055,
  },
  base: '',
  root: 'app/renderer/',
  resolve: {
    alias: {
      "@assets": resolve("app/renderer/src/assets/"),
    }
  }
})
