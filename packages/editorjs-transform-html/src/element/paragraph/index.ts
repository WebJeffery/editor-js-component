import { ParagraphBlock, Props } from '../../interfaces'
import { baseBlock } from '../../utils'
import './index.css'

export function paragraph({ data }: Props<ParagraphBlock>, wrapBlock: boolean) {
  const paragraphAlign = data.alignment || data.align || 'inherit'
  const item = `<p class="ce-paragraph cdx-block" style="text-align:${paragraphAlign}">${data.text}</p>`
  return baseBlock(item, wrapBlock)
}
