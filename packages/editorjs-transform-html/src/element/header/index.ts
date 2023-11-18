import { HeaderBlock, Props } from '../../interfaces'
import { baseBlock } from '../../utils'
import './index.css'

export function header({ data }: Props<HeaderBlock>, wrapBlock: boolean) {
  const { anchor, level, text } = data
  const item = `<h${level} class="ce-header cd-header${level}" ${anchor ? `id="${anchor}"` : ''}>${text}</h${level}>`
  return baseBlock(item, wrapBlock)
}
