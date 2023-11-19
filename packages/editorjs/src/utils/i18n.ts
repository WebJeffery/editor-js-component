import { createI18n } from 'vue-i18n'
import zh from '../lang/zh'
import en from '../lang/en'

const i18n = createI18n({
  legacy: false, // 使用composition API
  locale: 'zh', // 初始的时候调用这个函数获取vuex中的数据，当然vuex初始数据调用localstorage中存储的数据，或者默认赋值为”zh“
  globalInjection: true, // 表明使用全局t函数
  messages: {
    zh: {
      ...zh
    },
    en: {
      ...en
    }
  }
})

export default i18n
