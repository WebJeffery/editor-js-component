/**
 * Build styles
 */
import { ColorPlugin } from './picker'
import { markerIcon, textIcon } from './icons'

import { getDefaultColorCache, handleCSSVariables } from './picker/utils/main'
import './index.css'

/**
 * Text Color Tool for Editor.js
 */
export default class Color {
  /**
   * @param {{api: object}}  - Editor.js API
   */
  constructor({ config, api }) {
    this.api = api
    this.config = config
    this.clickedOnLeft = false
    this.pluginType = this.config.type || 'text'
    this.parentTag = this.pluginType === 'marker' ? 'MARK' : 'FONT'
    this.hasCustomPicker = this.config.customPicker || false
    this.color = handleCSSVariables(
      getDefaultColorCache(this.config.defaultColor, this.pluginType)
    )
    this.picker = null
    this.icon = null

    /**
     * Toolbar Button
     *
     * @type {HTMLElement|null}
     */
    this.button = null

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
   * @return {boolean}
   */
  static get isInline() {
    return true
  }

  /**
   * Create button element for Toolbar
   *
   * @return {HTMLElement}
   */
  render() {
    this.button = document.createElement('button')
    this.button.type = 'button'
    this.button.classList.add('colorPlugin')
    this.button.classList.add(this.iconClasses.base)
    this.button.appendChild(this.createLeftButton())
    this.button.appendChild(this.createRightButton(this))

    return this.button
  }

  /**
   * Create left part button
   *
   * @return {HTMLElement}
   */
  createLeftButton() {
    if (!this.icon) {
      this.icon = document.createElement('div')
      this.icon.id = 'color-left-btn'
      this.icon.appendChild(this.createButtonIcon())
      this.icon.addEventListener('click', () => this.clickedOnLeft = true)
    }

    return this.icon
  }

  /**
   * Create button icon
   *
   * @return {HTMLElement}
   */
  createButtonIcon() {
    const buttonIcon = document.createElement('div')
    buttonIcon.id = 'color-btn-text'
    const defaultIcon = this.pluginType === 'marker' ? markerIcon : textIcon
    buttonIcon.innerHTML = this.config.icon || defaultIcon
    return buttonIcon
  }

  /**
   * Create right part button
   *
   * @return {HTMLElement}
   */
  createRightButton(sharedScope) {
    if (!this.picker) {
      this.picker = new ColorPlugin({
        onColorPicked(value) {
          sharedScope.color = value
        },
        hasCustomPicker: this.hasCustomPicker,
        defaultColor: this.config.defaultColor,
        colorCollections: this.config.colorCollections,
        type: this.pluginType
      })
    }

    return this.picker
  }

  /**
   * handle selected fragment
   *
   * @param {Range} range - selected fragment
   */
  surround(range) {
    if (!range) {
      return
    }

    /**
     * clean legacy wrapper generated before editorjs-text-color-plugin v3.0
     */
    const legacySpanWrapper = this.api.selection.findParentTag('SPAN')
    if (legacySpanWrapper) this.unwrap(legacySpanWrapper)

    /**
     * If start or end of selection is in the highlighted block
     */
    const termWrapper = this.api.selection.findParentTag(this.parentTag)

    if (termWrapper) {
      this.unwrap(termWrapper)
    } else {
      this.wrap(range)
    }

    this.clickedOnLeft = false
  }

  /**
   * Wrap selected fragment
   *
   * @param {Range} range - selected fragment
   */
  wrap(range) {
    const selectedText = range.extractContents()
    const newWrapper = document.createElement(this.parentTag)

    newWrapper.appendChild(selectedText)
    range.insertNode(newWrapper)

    if (this.pluginType === 'marker') {
      this.wrapMarker(newWrapper)
    } else {
      this.wrapTextColor(newWrapper)
    }

    this.api.selection.expandToTag(newWrapper)
  }

  /**
   * Wrap selected marker fragment
   *
   * @param newWrapper - wrapper for selected fragment
   */
  wrapMarker(newWrapper) {
    newWrapper.style.backgroundColor = this.color
    const colorWrapper = this.api.selection.findParentTag('FONT')
    if (colorWrapper) newWrapper.style.color = colorWrapper.style.color
  }

  /**
   * Wrap selected text color fragment
   *
   * @param {Range} newWrapper - wrapper for selected fragment
   */
  wrapTextColor(newWrapper) {
    newWrapper.style.color = this.color
  }

  /**
   * Unwrap selected fragment
   *
   * @param {Range} termWrapper - parent of selected fragment
   */
  unwrap(termWrapper) {
    /**
     * Expand selection to all term-tag
     */
    this.api.selection.expandToTag(termWrapper)

    const sel = window.getSelection()
    const range = sel.getRangeAt(0)

    const unwrappedContent = range.extractContents()
    const insertElement = this.findContentNodes(unwrappedContent)

    if (insertElement) {
      /**
         * Remove empty term-tag
         */
      if (this.clickedOnLeft) {
        this.removeWrapper(termWrapper)
      } else {
        this.updateWrapper(termWrapper)
      }

      /**
         * Insert extracted content
         */
      range.insertNode(unwrappedContent)

      /**
         * Restore selection
         */
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
   * update color without create a new tag
   *
   * @param {Range} termWrapper - parent of selected fragment
   */
  updateWrapper(termWrapper) {
    if (this.pluginType === 'marker') {
      termWrapper.style.backgroundColor = this.color
    } else {
      termWrapper.style.color = this.color
    }
  }

  /**
   * remove wrapper
   *
   * @param {Range} termWrapper - parent of selected fragment
   */
  removeWrapper(termWrapper) {
    termWrapper.parentNode.removeChild(termWrapper)
  }

  /**
   * Check and change Term's state for current selection
   */
  checkState(range) {
    // TODO 对链接点击聚焦不做处理
    if (range.anchorNode.className === 'ce-link-autocomplete__field') return
    const legacyWrapper = this.api.selection.findParentTag('SPAN')
    const termTag = this.api.selection.findParentTag(this.parentTag)
    const isWrapped = legacyWrapper ? this.handleLegacyWrapper(legacyWrapper, termTag) : termTag
    this.button.classList.toggle(this.iconClasses.active, !!isWrapped)

    return !!isWrapped
  }

  /**
   * handle icon active state for legacy wrappers
   */
  handleLegacyWrapper(legacyWrapper, termTag) {
    return this.pluginType === 'marker' ? legacyWrapper : (termTag & legacyWrapper)
  }

  /**
   * Sanitizer rule
   * @return {{color: {class: string}}}
   */
  static get sanitize() {
    return {
      font: true,
      span: true,
      mark: true
    }
  }

  clear() {
    this.picker = null
    this.icon = null
  }
}
