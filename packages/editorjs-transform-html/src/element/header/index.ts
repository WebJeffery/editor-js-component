import { HeaderBlock, Props, ElementConfig } from '../../interfaces'
import { baseBlock } from '../../utils'

export function header({ data }: Props<HeaderBlock>, config: ElementConfig) {
  const { anchor, level, text } = data
  const item = `<h${level} class="${config.header.class} cd-header-${level}" ${anchor ? `id="${anchor}"` : ''}>${text}</h${level}>`
  return baseBlock(item, config.wrapBlock)
}
