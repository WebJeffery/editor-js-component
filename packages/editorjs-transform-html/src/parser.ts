// import defaultParsers from './parsers'
// import defaultConfig from './config'
import { ParseFunctionError } from './utils'
import { transformElement } from './element'

/**
 * json parser html
 */
export class EdjsParser {
  // public config: object
  public parsers: object

  constructor(customTransform) {
    // this.config = mergeDeep(defaultConfig, config)
    this.parsers = Object.assign(transformElement, customTransform || {})
  }

  parserHtml({ blocks }) {
    return blocks.map((block) => (this.parsers[block.type] ?
      this.parsers[block.type](block) :
      ParseFunctionError(block.type)))
  }

  // parseBlock(block) {
  //   if (!this.parsers[block.type]) {
  //     return new Error(
  //       `${block.type} is not supported! Define your own custom function.`
  //     )
  //   }
  //   try {
  //     return this.parsers[block.type](block.data, this.config)
  //   } catch (err) {
  //     return err
  //   }
  // }
}

export const parserCss = () => {
  const cssModules = import.meta.globEager('./element/*.css')

  const style = {
    elementStyle: ''
  }

  Object.keys(cssModules).forEach((path: string) => {
    const modelName = path.slice(path.lastIndexOf('/') + 1, -4)
    style.elementStyle += cssModules[path].default
    style[modelName] = cssModules[path].default
  })

  return style
}
