import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  build: {
    outDir: "../build/web",
    emptyOutDir: true,
    minify: "esbuild",
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      }
    }
  },
  resolve: {
    alias: {
      "@": "/src",
      "@types": path.resolve(__dirname, "../types/index.d.ts")
    }
  }
});
