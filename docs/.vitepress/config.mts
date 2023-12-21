import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import nav from './configs/nav.mts'
import sidebar from './configs/sidebar.mts'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Editor.js",
  description: "基于 Editor.js 富文本组件",
  outDir: "../dist",
  base: "/vue3-editor-js/",

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoBlockPlugin)
    }
  },

  vite: {
    server: {
      port: 7790
    },
    plugins: [
      // demoblockVitePlugin(),
      vueJsx()
    ],
    // resolve: {
    //   alias: {
    //     '@alias': path.resolve(__dirname, '../')
    //   }
    // }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WebJeffery/vue3-editor-js' }
    ]
  }
})
