import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import i18n from './utils/i18n'
import App from './App.vue'

const messages = {
  en: {
    message: {
      hello: 'hello world',
      'Heading 2': '标题2',
    }
  },
  cn: {
    message: {
      hello: '你好，世界',
      'Heading 2': '标题2',
      tools: {
        toolNames: {
          Bold: '加粗'
        },
        header: {

        }
      }
    }
  }
}
// const i18n = createI18n({
//   legacy: false,
//   globalInjection: true,

//   locale: 'cn',
//   messages
// })

createApp(App).use(i18n).mount('#app')
