/**
 * ✨ built by nich
 * 🌐 GitHub: github.com/nirholas
 * 💫 The web is your canvas, code is your brush ��️
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const banner = `/**
 * Lyra Web3 Playground
 * https://lyra.works
 * 
 * Copyright (c) 2025 nirholas
 * Licensed under MIT License
 * 
 * @author nich (@nichxbt)
 * @repository https://github.com/nirholas/lyra-web3-playground
 */`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        banner,
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'web3-vendor': ['ethers', 'viem', '@solana/web3.js'],
          // Monaco Editor will be lazy loaded only when needed
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['@solana/web3.js'],
  },
})
