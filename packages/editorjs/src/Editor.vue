<template>
  <div
    :id="holder"
    class="editor-md-wrap"
    :class="customClass"
  ></div>
</template>

<script setup lang="ts">
import {
  reactive,
  onMounted,
  watch,
  defineComponent,
  withDefaults
} from 'vue'

// Block Tools for the Editor
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import CodeTool from '@editorjs/code'
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Checklist from '@editorjs/checklist'
import Marker from '@editorjs/marker'
import Warning from '@editorjs/warning'
import RawTool from '@editorjs/raw'
import Quote from '@editorjs/quote'
import InlineCode from '@editorjs/inline-code'
import Delimiter from '@editorjs/delimiter'
import Image from '@editorjs/image'
import SimpleImage from '@editorjs/simple-image'
import { EdjsParser, parserCss } from 'editorjs-transform-html'

import {
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6
  // IconHeading
} from '@codexteam/icons'

// 功能
import Undo from 'editorjs-undo'
import DragDrop from 'editorjs-drag-drop'
import { useI18n } from 'vue-i18n'
import { PropsType } from './type'

const { t } = useI18n()

const props = withDefaults(defineProps<PropsType>(), {
  holder: 'vue-editor-js',
  tool: () => ['header', 'h1'],
  data: () => ({}),
  customTool: () => ({}),
  editorConfig: () => ({})
})

const emit = defineEmits<{
  (e: 'changeData', id: number): void
  (e: 'update', value: string): void
}>()

const state = reactive({ editor: null })

function initEditor() {
  destroyEditor()
  const defaultConfig = {
    // header: {
    //   class: Header,
    //   config: {
    //     // levels: [2, 3, 4, 5, 6], // 可转化的标题类型
    //     defaultLevel: 1 // 默认标题
    //   }
    // },
    h1: {
      class: Header,
      config: {
        // levels: [2, 3, 4, 5, 6], // 可转化的标题类型
        defaultLevel: 1 // 默认标题
      },
      toolbox: {
        icon: IconH1,
        title: 'H1'
      }
    },
    h2: {
      class: Header,
      config: {
        defaultLevel: 2
      },
      toolbox: {
        icon: IconH2,
        title: 'H2'
      }
    },
    h3: {
      class: Header,
      config: {
        defaultLevel: 3
      },
      toolbox: {
        icon: IconH3,
        title: 'H3'
      }
    },
    h4: {
      class: Header,
      config: {
        defaultLevel: 4
      },
      toolbox: {
        icon: IconH4,
        title: 'H5'
      }
    },
    h5: {
      class: Header,
      config: {
        defaultLevel: 5
      },
      toolbox: {
        icon: IconH5,
        title: 'H5'
      }
    },
    h6: {
      class: Header,
      config: {
        defaultLevel: 6
      },
      toolbox: {
        icon: IconH6,
        title: 'H6'
      }
    },
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
      config: {
        placeholder: 'Press Tab to select a Block'
      }
      // toolbox: {
      //   title: '段落'
      // }
    },
    list: {
      class: List
    },
    code: {
      class: CodeTool
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
      config: {
        rows: 2,
        cols: 3
      }
    },
    checklist: {
      class: Checklist
    },
    Marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M'
    },
    warning: {
      class: Warning,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+W',
      config: {
        titlePlaceholder: 'Title',
        messagePlaceholder: 'Message'
      }
    },
    raw: RawTool,
    quote: {
      class: Quote,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+O',
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author'
      }
    },
    // inlineCode: {
    //   class: InlineCode,
    //   shortcut: 'CMD+SHIFT+M',
    // },
    image: {
      class: Image,
      inlineToolbar: true,
      config: {
        types: 'image/*, video/mp4',
        endpoints: {
          byFile: '/api/transport/image',
          byUrl: '/api/transport/fetch'
        }
      }
    },
    delimiter: {
      class: Delimiter,
      inlineToolbar: true
    }
    // image: SimpleImage
  }

  const edjsParser = new EdjsParser()

  console.log(parserCss())

  state.editor = new EditorJS({
    holder: props.holder || 'vue-editor-js',
    tools: Object.assign(defaultConfig, props.customTool),
    data: props.data || {},
    // i18n: {
    //   messages: {
    //     tools: {
    //       header: {
    //         "Header": "标题"
    //       }
    //     }
    //   }
    // },
    i18n: {
      messages: {
        ui: {
          blockTunes: {
            toggler: {
              'Click to tune': '点击转换',
              'Heading 2': '标题2'
              // "or drag to move": "拖拽移动"
            }
          },
          inlineToolbar: {
            converter: {
              'Convert to': '内部转换'
            }
          },
          // Translations of internal UI components of the editor.js core
          toolbar: {
            toolbox: {
              Add: '工具栏添加',
              'Heading 2': '标题2'
            }
          },
          popover: {
            Filter: '过滤',
            'Nothing found': '找不到',
            'Heading 2': '标题2'
          }
        },
        // Section for translation Tool Names: both block and inline tools
        toolNames: {
          Text: t('message.hello'),
          List: '列表',
          H1: '222',
          'Heading 2': '标题2'
          // "Heading": "标题",
          // h1: 1111
        },
        /**
         * Section for passing translations to the external tools classes
         */
        tools: {
          header: {
            Header: '3333',
            h1: '表态',
            'Heading 2': '标题2'
          },
          link: {
            'Add a link': '添加链接'
          },
          code: {
            'Enter a code': '输入代码'
          }
          // header: {
          // }
        },
        // Section allows to translate Block Tunes
        blockTunes: {
          'Heading 2': '标题2',
          delete: {
            Delete: '删除'
          },
          moveUp: {
            'Move up': 'Переместить вверх'
          },
          moveDown: {
            'Move down': 'Переместить вниз'
          }
        }
      }
    },
    onReady() {
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
    async onChange(argv) {
      const json = await state.editor.save()
      const html = edjsParser.parserHtml(json)
      console.log(html)

      emit('changeData', {
        json,
        html,
        editor: argv
      })
    }
    // ...props.editorConfig
  })
  props.initialized(state.editor)
}

function destroyEditor() {
  if (state.editor) {
    state.editor.destroy()
    state.editor = null
  }
}

onMounted(() => initEditor(props))

</script>

<style lang="scss">
.editor-md-wrap {
  margin-left: 60px;

  .ce-block--focused {
    [contentEditable=true]:before{
      opacity: 1;
    }
  }

  .ce-delimiter {
    content: '---'
  }

  .codex-editor--narrow .codex-editor__redactor {
    margin: 0;
    // padding: 20px;
  }

  .codex-editor--narrow .ce-toolbar__actions,
  .codex-editor--narrow .ce-toolbar__actions {
    right: 100%;
  }

  .codex-editor--narrow .ce-toolbox .ce-popover,
  .codex-editor--narrow .ce-settings .ce-popover {
    left: 0;
  }

}

</style>
