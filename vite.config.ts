import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // Dynamically set the base path based on the environment
    base: mode === 'development' ? '/' : '/test-tv-app/',
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
      },
    },
  };
});