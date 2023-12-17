<template>
  <div
    :id="holder"
    class="editor-js-vue"
  ></div>
</template>

<script setup lang="ts">
import {
  reactive,
  onMounted,
  withDefaults
} from 'vue'

// Block Tools for the Editor
import EditorJS from '@editorjs/editorjs'
import i18nMessage from './lang/zh'

// 功能
import Undo from 'editorjs-undo'
import DragDrop from 'editorjs-drag-drop'

import { EditorType } from './type'

import {
  getEditorTools
} from './utils/plugin'

const props = withDefaults(defineProps<EditorType>(), {
  holder: 'vue-editor-js',
  blockToolbar: () => [], // 工具栏，启用、排序插件
  customPlugin: () => ({}), // 扩展插件
  pluginConfig: () => ({}), // 插件配置
  editorConfig: () => ({}), // 编辑器其他配置
  disablePlugin: () => [], // 禁用工具栏
  data: () => ({}) // 渲染数据
})

const emit = defineEmits<{
  (e: 'changeData', id: number): void
  (e: 'update', value: string): void
}>()

const state = reactive({ editor: null })
const toolPlugins = getEditorTools(props)

function initEditor() {
  state.editor = new EditorJS({
    holder: props.holder,
    autofocus: true,
    readOnly: props.readonly,
    tools: toolPlugins,
    data: props.data,
    inlineToolbar: ['bold', 'italic', 'link', 'underline', 'strikethrough', 'Color', 'Marker'],
    // tunes: ['anchorTune'],
    i18n: {
      messages: props.messages || i18nMessage
    },
    async onReady() {
      if (!props.readonly) {
        // 撤销重做
        new Undo({
          editor: state.editor,
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
        new DragDrop(state.editor)
      }
    },
    async onChange(api, event) {
      const json = await state.editor.save()

      emit('changeData', {
        json,
        editor: api,
        event
      })
    },
    ...props.editorConfig
  })
}

// refresh editor render
const refreshEditor = async () => {
  const saveData = await state.editor?.save()

  destroyEditor()
  initEditor()

  state.editor?.isReady.then(() => {
    if (saveData?.blocks.length) state.editor?.render(saveData!)
  })
}

function destroyEditor() {
  if (state.editor) {
    state.editor.destroy()
    state.editor = null
  }
}

defineExpose({
  refreshEditor
})

onMounted(() => {
  initEditor()
  props.initialized?.(state.editor)
})

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
