import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/web/',
  server: {
    host: '0.0.0.0',
  },
  plugins: [react()],
});
