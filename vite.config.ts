import {defineConfig} from "vite";
import {resolve} from "path";

export default defineConfig({
  css: {
    postcss: 'postcss.config.js'
  },
  resolve: {
    alias: {
      '@dota': resolve('./src')
    }
  },
  publicDir: 'public',
})