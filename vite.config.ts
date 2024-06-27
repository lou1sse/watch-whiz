/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Logo": "/src/assets/logo",
      "@GlobalComponents": "/src/components/global",
      "@LayoutComponents": "/src/components/layout",
      "@Config": "/src/config",
      "@Hooks": "/src/hooks",
      "@Pages": "/src/pages"
    }
  }
})
