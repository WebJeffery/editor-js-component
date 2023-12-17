import { ParagraphBlock, Props, ElementConfig } from '../../interfaces'
import { baseBlock } from '../../utils'

export function paragraph({ data }: Props<ParagraphBlock>, config: ElementConfig) {
  const paragraphAlign = data.alignment || data.align || 'inherit'
  const item = `<p class="${config.paragraph.class}" style="text-align:${paragraphAlign}">${data.text}</p>`
  return baseBlock(item, config.wrapBlock)
}
