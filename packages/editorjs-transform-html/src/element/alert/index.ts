import './index.css'
import { AlertBlock, Props } from '../../interfaces'
import { baseBlock } from '../../utils'

export function alert({ data }: Props<AlertBlock>, wrapBlock: boolean) {
  const item = `
        <div class="cdx-alert cdx-alert-${data.type}">
            <div class="cdx-alert__message">
                ${data.message}
            </div>
        </div>
    `
  return wrapBlock ? baseBlock(item) : wrapBlock
}
