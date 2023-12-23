import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import nav from './configs/nav.mjs'
import sidebar from './configs/sidebar.mjs'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Editor.js",
  description: "基于 Editor.js 富文本编辑器",
  outDir: "../dist",
  base: "/editor-js-component/",
  head: [
    ["link", { rel: "icon", type: 'image/png', href: "/editor-js-component/favicon.png" }],
  ],
  markdown: {
    // theme: { light: 'github-light', dark: 'github-dark' },

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
  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  lastUpdated: true, // string | boolean

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    // 隐藏logo右边的标题
    // siteTitle: false,
    nav,

    sidebar,
    // 编辑链接
    editLink: {
      pattern: "https://github.com/msyuan/editor-js-component",
      text: "在 github 上编辑此页",
    },
    // 站点页脚配置
    footer: {
      // message: "Released under the MIT License",
      copyright: "Copyright © 2023-present WebJeffery",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WebJeffery/editor-js-component' }
    ],
    // 搜索
    // algolia: {
    //   apiKey: "your_api_key",
    //   indexName: "index_name",
    // },
    // returnToTopLabel: "返回顶部",
    lastUpdatedText: "最后更新", // string
  }
})
