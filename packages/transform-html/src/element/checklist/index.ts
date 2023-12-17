import { CheckListBlock, Props, ElementConfig } from '../../interfaces'
import { baseBlock } from '../../utils'

export function checklist({ data }: Props<CheckListBlock>, config: ElementConfig) {
  const item = `
        <div class="cdx-block cdx-checklist">
            ${data.items.map((i) => `<div class="cdx-checklist__item ${i.checked ? 'cdx-checklist__item--checked' : ''}">
                    <span class="cdx-checklist__item-checkbox" ></span>
                    <div class="cdx-checklist__item-text" contenteditable="false">
                        ${i.text}
                    </div>
                </div>`).join('')}
        </div>
    `
  return baseBlock(item, config.wrapBlock)
}
