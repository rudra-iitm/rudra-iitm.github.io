import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  base: "/rudra-iitm.github.io/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})