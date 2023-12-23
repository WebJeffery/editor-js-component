// Block Tools for the Editor
import EditorJS from '@editorjs/editorjs'

// 功能
import Undo from 'editorjs-undo'
import DragDrop from 'editorjs-drag-drop'

import {
  getEditorTools
} from './utils/plugin'

export const useEditorjs = (props) => {
  const {
    holder = 'editor-js-component',
    readonly = false,
    autofocus = true,
    blockToolbar = [],
    customPlugin = [],
    pluginConfig = {},
    editorConfig = {},
    disablePlugin = [],
    data = {},
    messages = {},
    ...otherState
  } = props
  // state data
  const state = {
    holder, // 挂载节点
    readonly, // 是否只读
    autofocus,
    blockToolbar, // block块工具启用、排序
    customPlugin, // 新增的插件
    pluginConfig,
    editorConfig, // 插件配置
    disablePlugin, // 禁用工具
    data,
    messages,
    editorjs: null, // 编辑器实例
    ...otherState
  }

  const toolPlugins = getEditorTools(state)

  // 销毁编辑器
  const destroy = () => {
    if (state.editorjs) {
      state.onDestroy?.()
      state.editorjs.destroy()
      state.editorjs = null
    }
  }

  const initEditor = (config?: object) => {
    destroy()

    if (config) {
      Object.assign(state, config)
    }
    state.editorjs = new EditorJS({
      holder: state.holder,
      autofocus: state.autofocus,
      readOnly: state.readonly,
      tools: toolPlugins,
      data: state.data,
      // inlineToolbar: ['bold', 'italic', 'link', 'underline', 'strikethrough', 'Color', 'Marker'],
      // tunes: ['anchorTune'],
      i18n: {
        messages: state.messages || {}
      },
      onReady() {
        if (!props.readonly) {
          // 撤销重做
          new Undo({
            editor: state.editorjs,
            maxLength: 50,
            config: {
              shortcuts: {
                undo: 'CMD+Z',
                redo: 'CMD+Y'
              },
              debounceTimer: 500
            }
          })
          // 拖拽
          new DragDrop(state.editorjs)
          state.onReady?.(state)
        }
      },
      async onChange(api, event) {
        const json = await state.editorjs.save()

        state.onChange?.({
          data: json,
          event
        })
      },
      ...props.editorConfig
    })
  }

  // 启动开关
  const start = () => {
    state.onStart?.(state)

    initEditor()
  }

  const update = (editorData) => {
    if (editorData) {
      state.editorjs?.render(editorData)
    }
  }

  const refresh = async (config) => {
    if (config) {
      Object.assign(state, config)
    }

    state.data = await state.editorjs?.save()
    initEditor()
  }

  return {
    state,
    initEditor,
    start,
    update,
    refresh,
    destroy
  }
}
