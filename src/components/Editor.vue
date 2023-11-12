<template>
  <div :id="holder" />
</template>

<script>
import {
  reactive,
  onMounted,
  watch,
  defineComponent,
  defineEmits
} from 'vue'

// Block Tools for the Editor
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header';
import List from '@editorjs/list';
import CodeTool from '@editorjs/code'
import Paragraph from '@editorjs/paragraph'
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Checklist from '@editorjs/checklist'
import Marker from '@editorjs/marker'
import Warning from '@editorjs/warning'
import RawTool from '@editorjs/raw'
import Quote from '@editorjs/quote'
import InlineCode from '@editorjs/inline-code'
import Delimiter from '@editorjs/delimiter'
import SimpleImage from '@editorjs/simple-image'

// 功能
import Undo from 'editorjs-undo'
import DragDrop from 'editorjs-drag-drop'

export default defineComponent({
  name: 'vue-editor-js',
  props: {
    holder: {
      type: String,
      default: () => 'vue-editor-js',
      require: true
    },
    options: {
      type: Object,
      default: () => ({})
    },
    customTool: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    },
    initialized: {
      type: Function,
      default: () => {}
    }
  },
  emit: ['change'],
  setup (props, { emit }) {
    const state = reactive({ editor: null })

    function initEditor(props) {
      destroyEditor()
      const defaultConfig = {
        header: {
          class: Header,
          config: {
            placeholder: 'Enter a header',
            levels: [2, 3, 4, 5, 6], // 可转化的标题类型
            defaultLevel: 2, // 默认标题
          },
          inlineToolbar: ['link'], // 标题选中文本，转换链接出现工具栏
          shortcut: 'CMD+SHIFT+H' // 快捷键
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        code: {
          class: CodeTool
        },
        paragraph: {
          class: Paragraph,
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true,
              imgur: true
            }
          }
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        checklist: {
          class: Checklist,
        },
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+W',
          config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
          },
        },
        raw: RawTool,
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
        },
        // inlineCode: {
        //   class: InlineCode,
        //   shortcut: 'CMD+SHIFT+M',
        // },
        // image: {
        //   class: Image,
        //   inlineToolbar: true,
        //   config: {
        //     types: 'image/*, video/mp4',
        //     endpoints: {
        //       byFile: '/api/transport/image',
        //       byUrl: '/api/transport/fetch',
        //     },
        //   },
        // },
        delimiter: Delimiter,
        image: SimpleImage,
      }

      state.editor = new EditorJS({
        holder: props.holder || 'vue-editor-js',
        placeholder: 'Press Tab to select a Block',
        tools: Object.assign(defaultConfig, props.customTool),
        data: props.data,
        i18n: {
          messages: {
            tools: {
              header: {
                "Header": "标题"
              }
            }
          }
        },
        onReady () {
          // 撤销重做
          new Undo({
            editor: state.editor,
            config: {
              shortcuts: {
                undo: 'CMD+X',
                redo: 'CMD+Y'
              },
              debounceTimer: 100
            }
          })
          // 拖拽
          new DragDrop(state.editor)
        },
        onChange (args) {
          emit('change', args)
        }
      })
      props.initialized(state.editor)
    }

    function destroyEditor() {
      if (state.editor) {
        state.editor.destroy()
        state.editor = null
      }
    }

    onMounted(_ => initEditor(props))

    return { props, state }
  }
})
</script>