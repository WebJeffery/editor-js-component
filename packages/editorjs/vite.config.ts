import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts', // 你的入口文件路径
      name: 'EditorJsComponent', // 你的库名称
      fileName: (format) => `editorjs.${format}.js` // 打包后的文件名
    },
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      // 此处添加外部依赖项（如 Vue），以避免将其打包进你的库中
      external: [
        'vue'
      ]
    }
  }
});
