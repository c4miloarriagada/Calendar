import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid(), dts({ include: ['src'], insertTypesEntry: true })],
  build: {
    minify: true,
    rollupOptions: {
      external: ['solid'],
      output: {
        globals: {
          solid: 'solid'
        }
      }
    },
    lib: {
      entry: resolve('src', 'index.ts'),
      name: '@camilo/date-picker',
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => `index.${format === 'cjs' ? 'cjs' : 'es.js'}`
    },
    cssMinify: true
  }
})
