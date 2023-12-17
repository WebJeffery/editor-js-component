import { CodeBlock, Props, ElementConfig } from '../../interfaces'
import { baseBlock } from '../../utils'

export function code({ data }: Props<CodeBlock>, config: ElementConfig) {
  // const item = `
  //       <div class="cdx-block ce-code">
  //           <textarea class="ce-code__textarea cdx-input" placeholder="Enter a code" disabled="">
  //               ${data.code}
  //           </textarea>
  //       </div>
  //   `
  const item = `<pre><code>${data.code}</code></pre>`
  return baseBlock(item, config.wrapBlock)
}
