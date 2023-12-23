# editorjs-component-vue

editorjs-component-vue 是基于 editor-js-component 封装 Vue3 组件

## 安装

```shell
# NPM
npm install --save editorjs-component-vue

# or Yarn
yarn add editorjs-component-vue

# or Pnpm
pnpm add editorjs-component-vue
```

## 组件注册

```js
import { 
  EditorJsVue,
  EditorJsParser
} from 'editorjs-component-vue'

// or 全局注册组件

const app = createApp()

app.use(EditorJsVue)

```

## 组件使用

```html
<div class="editor-wrap">
  <EditorJsVue
    class="editor-left"
    ref="editor"
    :data="data"
    :messages="i18nMessage"
    :initialized="onInitialized"
    :tool-config="toolConfig"
    @changeData="editorChange"
  />
  <div class="editor-right">
    <EditorJsParser :block-list="blockList"></EditorJsParser>
  </div>
</div>
```

```js
const blockList = ref([])
let rangeSelection

const toolConfig = ref({
  image: {
    config: {
      customUpload: {
        uploadByCallback({ uploadSuccess }) {
          uploadSuccess({ url: 'https://editorjs.io/_nuxt/api-image_2x.aa04c3de.jpg' })
        }
      },
      uploader: {
        uploadByFile(file) {
          return uploadImage(file)
        }
      },
      endpoints: {
        byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
        byUrl: 'http://localhost:8008/fetchUrl' // Your endpoint that provides uploading by Url
      }
    }
  },
  link: {
    config: {
      getSelection(selection) {
        rangeSelection = selection
      },
      searchLinkData(search) {
        const list = [
          { name: 'xx1', href: 'https://baidu.com', description: '链接描述' }
          { name: 'xx2', href: 'https://baidu.com', description: '链接描述' }
          { name: 'xx3', href: 'https://baidu.com', description: '链接描述' }
        ]
        const result = list.filter((item) => item.name.includes(search))
        return Promise.resolve({
          items: result,
          success: true
        })
      }
    }
  }
})

// 解决点击链接后，切换内部工具栏不能选中
const onInitialized = (editor) => {
  editorInstance.value = editor
  editor.state.editorjs.isReady.then(() => {
    document.querySelector('.ce-inline-toolbar__buttons')?.addEventListener('click', (ev) => {
      let dataSet = ev.target.dataset
      let { target } = ev
      while (!dataSet.tool && target) {
        dataSet = target.parentNode.dataset
        target = target.parentNode
      }

      if (rangeSelection && !['link'].includes(dataSet.tool)) {
        rangeSelection?.()
        rangeSelection = null
      }
    }, true)
  })
}

const editorChange = ({ json }) => {
  blockList.value = json.blocks
}
```
