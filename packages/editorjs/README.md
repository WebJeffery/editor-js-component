# editorjs-js-component

editorjs-js-component 是基于 Editor.js 封装的库，不局限框架，可以用于 Vue 和 React 项目

## 安装

```shell
# NPM
npm install --save editor-js-component

# or Yarn
yarn add editor-js-component

# or Pnpm
pnpm add editor-js-component
```

## 使用

```js
import { useEditorjs } from 'editor-js-component'

// 执行函数
const editorInstance = useEditorjs({
  holder, // 挂载容器 id
  readonly, // 只读页面
  autofocus, // 自动聚焦
  blockToolbar, // 开启块功能，可以排序，不传默认使用全部插件
  customPlugin, // 可以添加新的插件，扩展功能
  pluginConfig, // 插件的配置，深度合并，可以修改插件配置
  editorConfig, // 编辑器的其他配置
  disablePlugin, // 禁用插件功能
  data, // 渲染的数据对象
  messages, // 国际化
  editorjs: null, // 实例化编辑器 Editorjs 对象
  onStart: (state) => { // 开始执行方法，可以修改 state 对象
    
  },
  onReady: (state) => { // 实例后执行方法
    
  },
  onChange: ({ data, event }) => { // 数据修改后执行方法
    
  },
  onDestroy: () => {
    
  },
})

// editorInstance 实例化后的对象
{
  state, // 数据
  initEditor, // 初始化方法
  start, // 启动方法
  update, // 更新方法
  refresh, // 刷新方法
  destroy // 销毁方法
}


// 实例化编辑器，开启执行
editorInstance.start()
```

