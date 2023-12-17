<template>
  <div id="editor-parser-wrap">
    <template v-for="item in blockList">
      <component
        :is="item.type"
        v-if="headerType.includes(item.type)"
        :key="item.id"
        class="ce-header"
        :class="[`ce-tune-alignment--${item.tunes?.alignBlockTune?.alignment || 'left'}`]"
        v-html="item.data.text"
      ></component>
      <div
        v-else-if="item.type === 'image'"
        :key="item.id"
        class="image-tool cdx-block"
        :class="[
          `ce-tune-alignment--${item.tunes?.alignBlockTune?.alignment || 'left'}`,
          item.data.withBorder ? 'image-tool--withBorder' : ''
        ]"
      >
        <div class="image-tool__image">
          <img
            :src="item.data.file.url"
            class="image-tool__image-picture"
          />
        </div>
      </div>
      <div
        v-else-if="item.type === 'button'"
        :key="item.id"
        class="anyButtonContainer__anyButtonHolder cdx-block"
        :class="[`ce-tune-alignment--${item.tunes?.alignBlockTune?.alignment || 'left'}`]"
      >
        <a
          :href="item.data.link"
          class="btn btn--default"
          target="_blank"
          @click="clickHandle(item, $event)"
        >{{ item.data.text }}</a>
      </div>
      <div
        v-else-if="item.type === 'raw'"
        :key="item.id"
        class="cdx-block"
        v-html="item.data.html"
      >
      </div>
      <p
        v-else
        :key="item.id"
        class="ce-paragraph"
        :class="[`ce-tune-alignment--${item.tunes?.alignBlockTune?.alignment || 'left'}`]"
        v-html="item.data.text"
      ></p>
    </template>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  blockList: {
    type: Array,
    default: () => []
  },
  headerType: {
    type: Array,
    default: () => ['h1', 'h2', 'h3', 'h4']
  }
})

const emit = defineEmits(['clickHandle'])

const clickHandle = (item, e) => {
  e.preventDefault()
  emit('clickHandle', item, e)
}

</script>
