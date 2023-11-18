import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Code from '@editorjs/code'
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Checklist from '@editorjs/checklist'
import Marker from '@editorjs/marker'
import InlineCode from '@editorjs/inline-code'
import Warning from '@editorjs/warning'
import Raw from '@editorjs/raw'
import Quote from '@editorjs/quote'
import Delimiter from '@editorjs/delimiter'
import SimpleImage from '@editorjs/simple-image'

export const PLUGINS = {
  header: Header,
  paragraph: Paragraph,
  list: List,
  code: Code,
  embed: Embed,
  table: Table,
  checklist: Checklist,
  marker: Marker,
  inlineCode: InlineCode,
  warning: Warning,
  raw: Raw,
  quote: Quote,
  delimiter: Delimiter,
  simpleImage: SimpleImage
}

export const PLUGINPROPS = [
  'header',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'personality', 'list', 'code', 'inlineCode', 'embed', 'linkTool', 'marker', 'table', 'raw', 'delimiter', 'quote', 'image', 'warning', 'paragraph', 'checklist']

export const PLUGIN_PROPS = ['header', 'personality', 'list', 'code', 'inlineCode', 'embed', 'linkTool', 'marker', 'table', 'raw', 'delimiter', 'quote', 'image', 'warning', 'paragraph', 'checklist']

export function useTools(props, config) {
  const pluginKeys = Object.keys(PLUGINS)
  const tools = { ...props.customTools }
  /**
   * When plugin props are empty, enable all plugins
   */
  if (pluginKeys.every((p) => !props[p])) {
    pluginKeys.forEach((key) => {
      tools[key] = { class: PLUGINS[key] }
    })
    Object.keys(config).forEach((key) => {
      if (tools[key] !== undefined && tools[key] !== null) {
        tools[key].config = config[key]
      }
    })
    return tools
  }

  pluginKeys.forEach((key) => {
    const prop = props[key]
    if (!prop) {
      return
    }

    tools[key] = { class: PLUGINS[key] }

    if (typeof prop === 'object') {
      const options = { ...props[key] }
      delete options.class // Prevent merge wrong `class`
      tools[key] = Object.assign(tools[key], options)
    }
  })

  Object.keys(config).forEach((key) => {
    if (tools[key] !== undefined && tools[key] !== null) {
      tools[key].config = config[key]
    }
  })

  return tools
}
