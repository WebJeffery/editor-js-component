# vue3-editor-js

基于 Editor.js 实现 Notion 风格富文本编辑器


请先查看 [https://editorjs.io/](https://editorjs.io/)

## Installation

```shell
# NPM
npm install --save editor-js-component

# or Yarn
yarn add veditor-js-component

# or Pnpm
pnpm add editor-js-component
```

## Usage

### In main.js
```js
// ...
import { EditorJsVue } from 'editor-js-component'

app.use(EditorJsVue)
// ...
```


## Tools

Supported tools
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
