/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 11:54:34
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-22 22:17:38
 * @@param: 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base:"/"
})
