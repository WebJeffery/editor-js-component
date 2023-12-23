export default {
  '/develop/': getComponentsSidebar()
}

function getComponentsSidebar() {
  return [
    {
      text: 'Editorjs 组件',
      items: [
        {
          text: 'editor-js-component',
          link: '/develop/editor-js-component'
        },
        {
          text: 'editorjs-component-vue',
          link: '/develop/editorjs-component-vue'
        }
      ]
    }
  ]
}


