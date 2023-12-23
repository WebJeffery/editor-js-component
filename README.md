# Editorjs Component

editor-js-component is an editorjs wrapper component that can use Vue and React frameworks


Please review this first. [https://editorjs.io/](https://editorjs.io/)


[Demo示例](https://vue-p4wjes.stackblitz.io)

## editor-js-component

### Installation

```shell
# NPM
npm install --save editor-js-component

# or Yarn
yarn add veditor-js-component

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

｜Name | Description | Default |
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

｜Name | Description | Default |
| --- | --- | --- |
|  onStart   |   -  |  Function   |
|  onReady   |   -  |  Function   |
|  onChange   |   -  |  Function   |
|  onDestroy   |   -  |  Function   |

## editorjs-component-vue

editorjs vue packages components

```js
import { EditorJsVue } from 'editorjs-component-vue'

```

Vue tempalte 

```html
<EditorJsVue
    :data="data"
    :messages="message"
    :initialized="onInitialized"
    :tool-config="toolConfig"
    @changeData="editorChange"
  />
```

## Supported Plugins

Same as in Supported Plugins, but with different naming

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
