import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  // 引入插件
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    https: false,
    port: 8990
  }
})
