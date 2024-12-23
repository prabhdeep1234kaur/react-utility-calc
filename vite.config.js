import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-utility-calc/',
  plugins: [react()],
  build: {
    outDir: 'dist' // Ensure this is set to 'dist'
  }
});