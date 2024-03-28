import { defineConfig } from 'vite'
import { resolve } from 'path'
import solidPlugin from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    solid(),
    solidPlugin(),
    dts({ include: ['src'], insertTypesEntry: true })
  ],
  build: {
    minify: 'esbuild',
    rollupOptions: {
      external: ['solid-js'],
      output: {
        globals: {
          'solid-js': 'solid-js'
        }
      }
    },
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'solid-calendar',
      formats: ['es'],
      fileName: () => `index.js`
    },
    cssMinify: true
  }
})
