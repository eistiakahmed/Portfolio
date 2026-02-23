import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Performance optimizations
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['react-icons'],
          ui: ['react-toastify', 'react-share']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  
  // Optimize dev server - FIXED FOR BETTER HMR
  server: {
    hmr: {
      overlay: true // Enable error overlay to see issues immediately
    },
    // Force page reload on certain file changes
    watch: {
      usePolling: true, // Use polling for better file change detection
    }
  },
  
  // Enable CSS code splitting
  css: {
    devSourcemap: true // Enable CSS source maps for debugging
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'react-icons',
      'react-toastify',
      'react-share'
    ],
    // Force re-optimization on every start
    force: false
  }
});
