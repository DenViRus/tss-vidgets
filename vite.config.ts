import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tss-vidgets/',
  resolve: {
    alias: {
      '@image': path.resolve(__dirname, './src/assets/image'),
      '@components': path.resolve(__dirname, './src/components'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
    },
  },

  server: {
    host: '0.0.0.0',
      port: 4500,
      open: true,
  },
}
)
