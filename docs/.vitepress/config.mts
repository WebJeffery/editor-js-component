import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import nav from './configs/nav.mts'
import sidebar from './configs/sidebar.mts'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Figcube UI 库",
  description: "基于Element-plus组件库",

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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
