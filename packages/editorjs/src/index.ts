import EditorJsVue from './Editor.vue'

EditorJsVue.install = function (app) {
  // 注册全局组件
  app.component('EditorJsVue', EditorJsVue)
}

// 注册插件
export default EditorJsVue
