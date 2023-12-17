import defaultConfig from './config'
import { transformElement } from './element'
import {
  deepMerge,
  ParseFunctionError
} from './utils'

const cssModules = import.meta.globEager('./style/*.css')

/**
 * json parser html
 */
export class EdjsParser {
  public config: object

  public parsers: object

  constructor(customTransform, config) {
    this.config = deepMerge(defaultConfig, config || {})
    this.parsers = Object.assign(transformElement, customTransform || {})
  }

  parserHtml({ blocks }) {
    const html = blocks.map((block) => (this.parsers[block.type] ?
      this.parsers[block.type](block, this.config) :
      ParseFunctionError(block.type)))

    return html.join('')
  }
}

export const parserCss = () => {
  const style = {}

  Object.keys(cssModules).forEach((path: string) => {
    const modelName = path.slice(path.lastIndexOf('/') + 1, -4)
    style[modelName] = cssModules[path].default
  })

  return style
}
