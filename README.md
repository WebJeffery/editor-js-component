# Editorjs Component

editor-js-component is an editorjs wrapper component that can use Vue and React frameworks


Please review this first. [https://editorjs.io/](https://editorjs.io/)


[Demo](https://vue-p4wjes.stackblitz.io)

## editor-js-component

### Installation

```shell
# NPM
npm install --save editor-js-component

# or Yarn
yarn add editor-js-component

# or Pnpm
pnpm add editor-js-component
```

### Usage

```js
import { useEditorjs } from 'editor-js-component'

const editorInstance = useEditorjs({
  holder, 
  readonly,
  autofocus,
  blockToolbar,
  customPlugin,
  pluginConfig,
  editorConfig,
  disablePlugin,
  data,
  messages,
  editorjs: null,
  onStart: ({ data }) => {
    
  },
  onReady: ({ data }) => {
    
  },
  onChange: ({ data }) => {
    
  },
  onDestroy: ({ data }) => {
    
  },
})
```

### API

**Attribute**

Name | Description | Default |
| --- | --- | --- |
|  holder   |   Mount node  |  editor-js-component   |
|  readonly   |  Read only page   |   false  |
|  autofocus   |  Autofocus editor   |  true   |
|  blockToolbar   |  The block tool opens and sorts   |   Array  |
|  customPlugin   |   Add new plug-in  |   Object  |
|  pluginConfig   |  Plug-in configuration   |   Object  |
|  editorConfig   |  Editor configuration   |   Object  |
|  disablePlugin   | List of disabled plug-ins    |   Array，suach as[ 'header', 'list']  |
|  data   |   Render data  |  Object   |
|  messages   |  International translation   |   Object  |


**Mehtods**

Name | Description | Default |
| --- | --- | --- |
|  onStart   |   -  |  Function   |
|  onReady   |   -  |  Function   |
|  onChange   |   -  |  Function   |
|  onDestroy   |   -  |  Function   |

## editorjs-component-vue

editorjs vue packages components

```js
import { EditorJsVue, EditorJsParser } from 'editorjs-component-vue'

```


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
          { name: 'xx1', href: 'https://xxx.com', description: '' }
          { name: 'xx2', href: 'https://xxx.com', description: '' }
          { name: 'xx3', href: 'https://xxx.com', description: '' }
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

const onInitialized = (editor) => {
  editorInstance.value = editor
}

const editorChange = ({ json }) => {
  blockList.value = json.blocks
}
```

## Supported Plugins

- header
- list
- code
- inlineCode
- personality
- embed
- linkTool
- marker
- table
- raw
- delimiter
- quote
- image
- warning
- paragraph
- checklist
