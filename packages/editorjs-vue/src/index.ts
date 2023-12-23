import EditorJsVue from './Editor.vue'
import EditorJsParser from './components/EditorParser.vue'

export default EditorJsVue.install = function (app) {
  // 注册全局组件
  app.component('EditorJsVue', EditorJsVue)
}

// 注册插件
export {
  EditorJsVue,
  EditorJsParser
}
