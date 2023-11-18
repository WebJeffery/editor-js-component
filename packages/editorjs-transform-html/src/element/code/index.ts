import './index.css'
import { CodeBlock, Props } from '../../interfaces'
import { baseBlock } from '../../utils'

export function code({ data }: Props<CodeBlock>, wrapBlock: boolean) {
  const item = `
        <div class="cdx-block ce-code">
            <textarea class="ce-code__textarea cdx-input" placeholder="Enter a code" disabled="">
                ${data.code}
            </textarea>
        </div>
    `
  return wrapBlock ? baseBlock(item) : item
}
