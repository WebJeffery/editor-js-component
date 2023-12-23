<template>
  <div class="editor-demo">
    <div class="header">
      <h1 style="text-align: center;">
        Notion 富文本编辑器
      </h1>
      <div class="btn">
        <el-button
          type="primary"
          @click="changeLang"
        >
          {{ lang === 'zh' ? '中文' : 'English' }}
        </el-button>
      </div>
    </div>
    <div class="editor-wrap">
      <EditorJsVue
        ref="editor"
        class="editor-left"
        :data="data"
        :messages="lang === 'zh' ? zhMessage : {}"
        :initialized="onInitialized"
        :tool-config="toolConfig"
        @changeData="editorChange"
      />
      <div class="editor-right">
        <EditorJsParser :block-list="blockList"></EditorJsParser>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import {
  EditorJsVue,
  EditorJsParser
} from 'editorjs-component-vue'

import zhMessage from './lang/zh'
import { blockData } from './data'

const illegalImages = ref([])
const isRun = ref(false)
let rangeSelection = null

const branchValidImage = () => {
  if (!isRun.value) {
    isRun.value = true
    const time = setTimeout(() => {
      isRun.value = false
      console.log('illegalImages', illegalImages)
      illegalImages.value = []
    }, 1000)
  }
}

function validateImages(file) {
  // 检查文件大小，这里假设最大为 5MB
  const maxSize = 3 * 1024 * 1024 // 5MB
  if (file.size > maxSize) {
    branchValidImage()
    illegalImages.value.push(file.name)
    return false
  }
  return true
}

function uploadImage(files) {
  return new Promise((resolve, reject) => {
    const isValid = validateImages(files)

    if (isValid) {
      resolve({
        success: true,
        file: {
          url: 'https://editorjs.io/_nuxt/api-image_2x.aa04c3de.jpg'
        }
      })
    } else {
      reject('Invalid images')
    }
  })
}

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
          // return Promise.resolve({
          //   success: true,
          //   file: {
          //     url: file
          //   }
          // })
        }
      },
      endpoints: {
        byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
        byUrl: 'http://localhost:8008/fetchUrl' // Your endpoint that provides uploading by Url
      }
    }
  },
  alignBlockTune: {
    config: {
      async changeTune() {
        // const data = await editorInstance.value.save()
        // editorChange({
        //   json: data
        // })
      }
    }
  },
  link: {
    config: {
      getSelection(selection) {
        // selection('https://baidu.com')
        rangeSelection = selection
      },
      searchLinkData(search) {
        const list = [
          { name: '首页', href: 'https://www.cms3-site004890001.ifonelab.net/', description: 'https://www.cms3-site004890001.ifonelab.net/' },
          { name: '首页1', href: 'https://www.cms3-site004890001.ifonelab.net/', description: 'https://www.cms3-site004890001.ifonelab.net/33333333333333333333333333333333333333333333' },
          { name: '首页2', href: 'https://www.cms3-site004890001.ifonelab.net/', description: 'https://www.cms3-site004890001.ifonelab.net/' }
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

const editorInstance = ref(null)

const blockList = ref(blockData)

const data = ref({
  time: 15912323044,
  blocks: blockList.value,
  version: '2.28.0'
})

const editorChange = ({ json }) => {
  blockList.value = json.blocks
}

const editor = ref(null)
const lang = ref('en')

const onInitialized = (editor) => {
  editorInstance.value = editor
  editor.state.editorjs.isReady.then(() => {
    document.querySelector('.ce-inline-toolbar__buttons')?.addEventListener('click', (ev) => {
      let dataSet = ev.target.dataset
      let { target } = ev
      // if (!dataSet.tool) {
      //   dataSet = ev.target.parentNode.dataset
      //   console.log(ev.target.parentNode)
      // }
      while (!dataSet.tool && target) {
        dataSet = target.parentNode.dataset
        target = target.parentNode
      }
      // ['bold', 'strikethrough', 'italic', 'Color', 'Maker', 'underline']
      if (rangeSelection && ['bold', 'strikethrough', 'italic', 'Color', 'Maker', 'underline'].includes(dataSet.tool)) {
        rangeSelection?.()
        rangeSelection = null
      }
    }, true)
  })
}

// 切换语言
const changeLang = () => {
  lang.value = lang.value === 'en' ? 'zh' : 'en'
  editor.value.refreshEditor({ messages: lang.value === 'zh' ? zhMessage : {} })
}
</script>

<style lang='scss' scoped>
.editor-demo {
  .header {
    position: relative;
  }
  .btn {
    position: absolute;
    right: 20px;
    top: 0;
  }
}
.editor-wrap {
  display: flex;
  padding-left: 70px;
}
.editor-left {
  flex: 1;
//   overflow: hidden;
}
.editor-right {
  flex: 1;
  overflow: hidden;
}
.codex-editor--narrow .ce-toolbar__actions {
  right: 0;
}
</style>
