import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    port: 8804,
    host: '0.0.0.0'
  },
  build: {
    lib: {
      entry: 'src/index.ts', // 你的入口文件路径
      name: 'VueEitorjs', // 你的库名称
      fileName: (format) => `editorjs.${format}.js` // 打包后的文件名
    },
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      // 此处添加外部依赖项（如 Vue），以避免将其打包进你的库中
      external: [
        'vue'
      ],
      output: {
        // 设置为 'es' 或 'cjs'，取决于你的库的使用场景
        // format: 'es',
        // exports: 'named',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
