import { ImageBlock, Props, ElementConfig } from '../../interfaces'
import { baseBlock } from '../../utils'

export function image({ data }: Props<ImageBlock>, config: ElementConfig) {
  const stretched = data.stretched ? 'image-tool--stretched' : ''
  const border = data.withBorder ? 'image-tool--withBorder' : ''
  const background = data.withBackground ? 'image-tool--withBackground' : ''

  const item = `
        <div class="cdx-block image-tool image-tool--filled ${stretched} ${border} ${background}">
            <div class="image-tool__image">
                <img class="image-tool__image-picture"
                    src="${data.file.url}"
                    alt="${data.file.alt || ''}"
                >
            </div>
            <div class="cdx-input image-tool__caption" contenteditable="false" data-placeholder="Caption">
                ${data.caption}
            </div>
        </div>
    `
  return baseBlock(item, config.wrapBlock)
}
