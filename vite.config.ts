/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Logo": "/src/assets/logo",
      "@APIService": "/src/api",
      "@CompoundComponents": "/src/components/compound",
      "@GlobalComponents": "/src/components/global",
      "@LayoutComponents": "/src/components/layout",
      "@Config": "/src/config",
      "@Pages": "/src/pages",
      "@Store": "/src/store",
      "@Utilities": "/src/utils"
    }
  }
})
