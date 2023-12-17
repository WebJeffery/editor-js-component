import { defineConfig } from 'vite'
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import * as pkg from './package.json';

const NODE_ENV = process.argv.mode || 'development';
const VERSION = pkg.version;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.js'),
      name: 'Header',
      fileName: 'header'
    }
  },
  define: {
    NODE_ENV: JSON.stringify(NODE_ENV),
    VERSION: JSON.stringify(VERSION)
  },

  plugins: [cssInjectedByJsPlugin()]
})
