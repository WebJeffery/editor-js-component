/**
 * Build styles
 */
import './index.css'
import { IconUnderline } from '@codexteam/icons'

/**
* Underline Tool for the Editor.js
*
* Allows to wrap inline fragment and style it somehow.
*/
export default class Underline {
  /**
  * Class name for term-tag
  *
  * @type {string}
  */
  static get CSS() {
    return 'cdx-underline'
  }

  /**
  * @param {{api: object}}  - Editor.js API
  */
  constructor({ api }) {
    this.api = api

    /**
    * Toolbar Button
    *
    * @type {HTMLElement|null}
    */
    this.button = null

    /**
    * Tag represented the term
    *
    * @type {string}
    */
    this.tag = 'U'

    /**
    * CSS classes
    */
    this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    }
  }

  /**
  * Specifies Tool as Inline Toolbar Tool
  *
  * @returns {boolean}
  */
  static get isInline() {
    return true
  }

  /**
  * Create button element for Toolbar
  *
  * @returns {HTMLElement}
  */
  render() {
    this.button = document.createElement('button')
    this.button.type = 'button'
    this.button.classList.add(this.iconClasses.base)
    this.button.innerHTML = this.toolboxIcon

    return this.button
  }

  /**
  * Wrap/Unwrap selected fragment
  *
  * @param {Range} range - selected fragment
  */
  surround(range) {
    if (!range) {
      return
    }

    const termWrapper = this.api.selection.findParentTag(this.tag, Underline.CSS)

    /**
    * If start or end of selection is in the highlighted block
    */
    if (termWrapper) {
      this.unwrap(termWrapper)
    } else {
      this.wrap(range)
    }
  }

  /**
  * Wrap selection with term-tag
  *
  * @param {Range} range - selected fragment
  */
  wrap(range) {
    /**
    * 创建包裹高亮的标签
    */
    const u = document.createElement(this.tag)

    u.classList.add(Underline.CSS)

    // extractContents 删除选中的范围，并返回节点添加到新的父节点
    u.appendChild(range.extractContents())
    // 选中范围插入新的节点
    range.insertNode(u)

    /**
    * 选中改节点
    */
    this.api.selection.expandToTag(u)
  }

  /**
  * Unwrap term-tag
  *
  * @param {HTMLElement} termWrapper - term wrapper tag
  */
  unwrap(termWrapper) {
    /**
    * 选中标签的内容
    */
    this.api.selection.expandToTag(termWrapper)

    const sel = window.getSelection()
    const range = sel.getRangeAt(0)

    // 删除选中的范围内容，并保存到文档片段
    const unwrappedContent = range.extractContents()
    // 过滤插入有内容的节点
    const insertElement = this.findContentNodes(unwrappedContent)

    if (insertElement) {
      /**
        * 删除外层节点
        */
      termWrapper.parentNode.removeChild(termWrapper)

      /**
        * 添加节点
        */
      range.insertNode(unwrappedContent)

      // 重新设置选区
      this.api.selection.expandToTag(insertElement)
    }
  }

  //   查看有内容的文本节点
  findContentNodes(node) {
    // 遍历子节点
    let child = node.firstChild
    let result = ''
    while (child) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        result = this.findContentNodes(child)
        if (result) {
          break
        }
      } else if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
        // 检查节点是否为文本节点，并且是否包含内容
        return child
      }
      child = child.nextSibling
    }
    return result
  }

  /**
  * Check and change Term's state for current selection
  */
  checkState(range) {
    // TODO 对链接点击聚焦不做处理
    if (range.anchorNode.className === 'ce-link-autocomplete__field') return
    const termTag = this.api.selection.findParentTag(this.tag, Underline.CSS)

    this.button.classList.toggle(this.iconClasses.active, !!termTag)
  }

  /**
  * Get Tool icon's SVG
  *
  * @returns {string}
  */
  get toolboxIcon() {
    return IconUnderline
  }

  /**
  * Sanitizer rule
  *
  * @returns {{u: {class: string}}}
  */
  static get sanitize() {
    return {
      u: {
        class: Underline.CSS
      }
    }
  }
}
