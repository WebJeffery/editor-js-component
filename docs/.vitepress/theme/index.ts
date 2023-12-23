import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

// import cn from 'element-plus/lib/locale/lang/zh-cn'
import { useComponents } from './useComponents'
import './style.css'
import './styles/custom.scss'
import './styles/site.scss'
import './styles/rainbow.css'

export default {
  ...DefaultTheme,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData}) {
    // DefaultTheme.enhanceApp(ctx)
    app.use(ElementPlus)
    useComponents(app)
  }
}
