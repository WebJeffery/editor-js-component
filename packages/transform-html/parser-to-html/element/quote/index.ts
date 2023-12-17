import { Props, QuoteBlock, ElementConfig } from '../../interfaces'
// import { baseBlock, make } from '../../utils'

const CSS = {
  baseClass: 'cdx-block',
  wrapper: 'cdx-quote',
  text: 'cdx-quote__text',
  input: 'cdx-input',
  caption: 'cdx-quote__caption'
}

export function quote({ data }: Props<QuoteBlock>, config: ElementConfig) {
  // const wrapper = make('div')
  // const container = make('blockquote', [CSS.baseClass, CSS.wrapper])
  // const quoteHtml = make('div', [CSS.input, CSS.text], {
  //   innerHTML: data.text
  // })
  // const caption = make('div', [CSS.input, CSS.caption], {
  //   innerHTML: data.caption
  // })

  // container.appendChild(quoteHtml)
  // container.appendChild(caption)
  // wrapper.appendChild(container)
  // return baseBlock(wrapper.innerHTML, config.wrapBlock)
  return `<blockquote>${data.text}</blockquote> - ${data.caption}`
}
