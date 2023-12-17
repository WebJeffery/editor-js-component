import { ButtonBlock, Props, ElementConfig } from '../../interfaces'
import { baseBlock } from '../../utils'

export function button({ data }: Props<ButtonBlock>, config: ElementConfig) {
  const item = `
        <div class="anyButtonContainer__anyButtonHolder">
            <a class="btn btn--default" target="_blank" href="${data.link}">
                ${data.text}
            </a>
        </div>
    `
  return baseBlock(item, config.wrapBlock)
}
