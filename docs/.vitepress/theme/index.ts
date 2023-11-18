import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
// import cn from 'element-plus/lib/locale/lang/zh-cn'
import { useComponents } from './useComponents'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(ElementPlus)
    useComponents(ctx.app)
  }
}
