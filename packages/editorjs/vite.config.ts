import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: 'src/index.ts', // 你的入口文件路径
      name: 'editorjs', // 你的库名称
      fileName: (format) => `editorjs.${format}.js` // 打包后的文件名
    },
    sourcemap: true // 输出.map文件
  }
});
