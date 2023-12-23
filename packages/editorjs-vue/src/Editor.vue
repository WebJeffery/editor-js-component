<template>
  <div
    :id="holder"
    class="editor-js-vue"
  ></div>
</template>

<script setup lang="ts">
import {
  onMounted,
  withDefaults
} from 'vue'

import { useEditorjs } from 'editor-js-component'
import { EditorType } from './type'

const props = withDefaults(defineProps<EditorType>(), {
  holder: 'vue-editor-js'
})

const emit = defineEmits<{
  (e: 'changeData', id: number): void
  (e: 'update', value: string): void
}>()

const editorInstance = useEditorjs({
  ...props,
  onChange: ({ data }) => {
    console.log(data)
    emit('changeData', {
      json: data
    })
  }
})

// refresh editor render
const refreshEditor = async (config) => {
  editorInstance.refresh(config)
}

onMounted(() => {
  editorInstance.start()
  props.initialized?.(editorInstance)
})

defineExpose({
  refreshEditor
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
