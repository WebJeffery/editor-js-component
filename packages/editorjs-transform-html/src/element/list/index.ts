import {
  ListBlock,
  Props,
  ElementConfig
} from '../../interfaces'
import { baseBlock } from '../../utils'

export function list({ data }: Props<ListBlock>, config: ElementConfig) {
  const listStyle = data.style === 'unordered' ? 'ul' : 'ol'

  const recursor = (items: any, reStyle: string) => {
    const listArr = items.map((item: any) => {
      if (!item.content && !item.items) return `<li>${item}</li>`

      let relist = ''
      if (item.items) relist = recursor(item.items, reStyle)
      if (item.content) return `<li> ${item.content} </li>${relist}`
    })

    return `<${reStyle}>${listArr.join('')}</${reStyle}>`
  }

  return baseBlock(recursor(data.items, listStyle), config.wrapBlock)
}
