import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests.js',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: ['src/main.jsx', 'tests/setupTests.js','vite.config.js','eslint.config.js','coverage','dist','.scannerwork','tests'],
    },
    reporters: ['default', 'junit'],
    outputFile: {
      junit: 'junit.xml',
    },
  },
})
