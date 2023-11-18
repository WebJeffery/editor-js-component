import VueEditorJs from './Editor.vue'

export * from './utils'

VueEditorJs.install = function (app) {
  // 注册全局组件
  app.component('EditorJsVue', VueEditorJs)
}

// 注册插件
export default VueEditorJs
