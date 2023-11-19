import { Props, RawBlock, ElementConfig } from '../../interfaces'
import { baseBlock } from '../../utils'

export function raw({ data }: Props<RawBlock>, config: ElementConfig) {
  return baseBlock(data.html, config.wrapBlock)
}
