import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  cn: {
    message: {
      hello: '你好，世界'
    }
  }
}
const i18n = createI18n({
  legacy: false,
  globalInjection: true,

  locale: 'cn',
  messages
})

createApp(App).use(i18n).mount('#app')
