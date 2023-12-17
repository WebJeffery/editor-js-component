import * as Dom from './dom'

const FakeId = 'selection-link-id'

/**
 * Lib for working with selection
 */
export class SelectionUtils {
  /**
   * Prepare a new SelectionUtils instance for saving and restoring selection
   */
  constructor(api) {
    /**
     * Selection instances
     */
    this.selection = null

    /**
     * This property can store SelectionUtils's range for restoring later
     *
     * @type {Range|null}
     */
    this.savedSelectionRange = null

    /**
     * Fake background is active
     *
     * @returns {boolean}
     */
    this.isFakeBackgroundEnabled = false

    this.api = api

    /**
     * Native Document's commands for fake background
     */
    this.commandBackground = 'backColor'
    this.commandRemoveFormat = 'removeFormat'
    this.tag = 'LABEL'
  }

  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */
  static get anchorNode() {
    const selection = window.getSelection()

    return selection ? selection.anchorNode : null
  }

  /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */
  static get anchorElement() {
    const selection = window.getSelection()

    if (!selection) {
      return null
    }

    const { anchorNode } = selection

    if (!anchorNode) {
      return null
    }

    if (!Dom.isElement(anchorNode)) {
      return anchorNode.parentElement
    }
    return anchorNode
  }

  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */
  static get anchorOffset() {
    const selection = window.getSelection()

    return selection ? selection.anchorOffset : null
  }

  /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */
  static get isCollapsed() {
    const selection = window.getSelection()

    return selection ? selection.isCollapsed : null
  }

  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    const selection = SelectionUtils.get()

    return !!selection.anchorNode
  }

  /**
   * Return first range
   *
   * @returns {Range|null}
   */
  static get range() {
    const selection = window.getSelection()

    return selection && selection.rangeCount ? selection.getRangeAt(0) : null
  }

  /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */
  static get rect() {
    let sel = document.selection
    let range

    let rect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }

    if (sel && sel.type !== 'Control') {
      range = sel.createRange()
      rect.x = range.boundingLeft
      rect.y = range.boundingTop
      rect.width = range.boundingWidth
      rect.height = range.boundingHeight

      return rect
    }

    if (!window.getSelection) {
      console.warn('Method window.getSelection is not supported')

      return rect
    }

    sel = window.getSelection()

    if (sel.rangeCount === null || isNaN(sel.rangeCount)) {
      console.warn('Method SelectionUtils.rangeCount is not supported')

      return rect
    }

    if (sel.rangeCount === 0) {
      return rect
    }

    range = sel.getRangeAt(0).cloneRange()

    if (range.getBoundingClientRect) {
      rect = range.getBoundingClientRect()
    }
    // Fall back to inserting a temporary element
    if (rect.x === 0 && rect.y === 0) {
      const span = document.createElement('span')

      if (span.getBoundingClientRect) {
        // Ensure span has dimensions and position by
        // adding a zero-width space character
        span.appendChild(document.createTextNode('\u200b'))
        range.insertNode(span)
        rect = span.getBoundingClientRect()

        const spanParent = span.parentNode

        spanParent.removeChild(span)

        // Glue any broken text nodes back together
        spanParent.normalize()
      }
    }

    return rect
  }

  /**
   * Returns selected text as String
   *
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : ''
  }

  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */
  static get() {
    return window.getSelection()
  }

  /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   *
   * @returns {DOMRect} of range
   */
  static setCursor(element, offset = 0) {
    const range = document.createRange()
    const selection = window.getSelection()

    /** if found deepest node is native input */
    if (Dom.isNativeInput(element)) {
      if (!Dom.canSetCaret(element)) {
        return
      }

      element.focus()
      element.selectionStart = element.selectionEnd = offset

      return element.getBoundingClientRect()
    }

    range.setStart(element, offset)
    range.setEnd(element, offset)

    selection.removeAllRanges()
    selection.addRange(range)

    return range.getBoundingClientRect()
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
   * Removes fake background
   */
  removeFakeBackground(appendDom) {
    const termWrapper = this.api.selection.findParentTag(this.tag)
    if (!termWrapper) return

    this.api.selection.expandToTag(termWrapper)
    const sel = window.getSelection()
    const range = sel.getRangeAt(0)

    const unwrappedContent = range.extractContents()
    const insertElement = this.findContentNodes(unwrappedContent)

    if (insertElement) {
      // 移除最外层元素
      termWrapper.parentNode.removeChild(termWrapper)

      if (appendDom) {
        appendDom.appendChild(unwrappedContent)
        // 插入文档片段到选区的起始位置
        range.insertNode(appendDom)
      } else {
        // 插入文档片段到选区的起始位置
        range.insertNode(unwrappedContent)
      }

      // 重新设置选区
      this.api.selection.expandToTag(insertElement)
    }
  }

  /**
   * Sets fake background
   */
  setFakeBackground(range) {
    const newSpan = document.createElement(this.tag)
    // // // 设置 span 的属性，比如 ID
    newSpan.id = FakeId
    newSpan.style.backgroundColor = '#d4ecff'

    newSpan.appendChild(range.extractContents())
    range.insertNode(newSpan)
    this.api.selection.expandToTag(newSpan)

    this.isFakeBackgroundEnabled = true
  }

  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = SelectionUtils.range
  }

  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange) {
      return
    }

    const sel = window.getSelection()

    sel.removeAllRanges()
    sel.addRange(this.savedSelectionRange)
  }

  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null
  }

  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const sel = window.getSelection()
    const range = document.createRange()

    range.selectNodeContents(sel.focusNode)
    range.collapse(false)
    sel.removeAllRanges()
    sel.addRange(range)
  }

  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   *
   * @returns {HTMLElement|null}
   */
  findParentTag(tagName, className, searchDepth = 10) {
    const selection = window.getSelection()
    let parentTag = null

    /**
     * If selection is missing or no anchorNode or focusNode were found then return null
     */
    if (!selection || !selection.anchorNode || !selection.focusNode) {
      return null
    }

    /**
     * Define Nodes for start and end of selection
     */
    const boundNodes = [
      /** the Node in which the selection begins */
      selection.anchorNode,
      /** the Node in which the selection ends */
      selection.focusNode
    ]

    /**
     * For each selection parent Nodes we try to find target tag [with target class name]
     * It would be saved in parentTag variable
     */
    boundNodes.forEach((parent) => {
      /** Reset tags limit */
      let searchDepthIterable = searchDepth

      while (searchDepthIterable > 0 && parent.parentNode) {
        /**
         * Check tag's name
         */
        if (parent.tagName === tagName) {
          /**
           * Save the result
           */
          parentTag = parent

          /**
           * Optional additional check for class-name mismatching
           */
          if (className && parent.classList && !parent.classList.contains(className)) {
            parentTag = null
          }

          /**
           * If we have found required tag with class then go out from the cycle
           */
          if (parentTag) {
            break
          }
        }

        /**
         * Target tag was not found. Go up to the parent and check it
         */
        parent = parent.parentNode
        searchDepthIterable--
      }
    })

    /**
     * Return found tag or null
     */
    return parentTag
  }

  /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selcted
   */
  expandToTag(element) {
    const selection = window.getSelection()

    selection.removeAllRanges()
    const range = document.createRange()

    range.selectNodeContents(element)
    selection.addRange(range)
  }
}
