import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "ui",
      fileName: "index",
      formats: ["es"]
    },
    outDir: "./lib"
  }
})
