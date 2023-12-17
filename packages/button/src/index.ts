import './index.css'

export default class AnyButton {
  /**
     *
     * @returns {{icon: string, title: string}}
     */
  static get toolbox() {
    return {
      title: 'Button',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="20" viewBox="0 0 512 512" width="20"><path d="m237.102 366v-90.018h-90c-11.046 0-20-8.954-20-20s8.954-20 20-20h90v-90.982c0-11.046 8.954-20 20-20s20 8.954 20 20v90.982h90c11.046 0 20 8.954 20 20s-8.954 20-20 20h-90v90.018c0 11.046-8.954 20-20 20s-20-8.954-20-20zm254.898-15c11.046 0 20-8.954 20-20v-251c0-44.112-35.888-80-80-80h-352c-44.112 0-80 35.888-80 80v352c0 44.112 35.888 80 80 80h352c44.112 0 80-35.888 80-80 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 22.056-17.944 40-40 40h-352c-22.056 0-40-17.944-40-40v-352c0-22.056 17.944-40 40-40h352c22.056 0 40 17.944 40 40v251c0 11.046 8.954 20 20 20z"/></svg>'
    }
  }

  /**
     * Returns true to notify the core that read-only mode is supported
     *
     * @return {boolean}
     */
  static get isReadOnlySupported() {
    return true
  }

  /**
     *
     * @returns {boolean}
     */
  static get enableLineBreaks() {
    return false
  }

  /**
     *
     * @returns {{EDIT: number, VIEW: number}}
     * @constructor
     */
  static get STATE() {
    return {
      EDIT: 0,
      VIEW: 1
    }
  }

  /**
     *
     * @param data
     */
  set data(data) {
    this._data = {
      link: this.api.sanitizer.clean(data.link || '', AnyButton.sanitize),
      text: this.api.sanitizer.clean(data.text || '', AnyButton.sanitize)
    }
  }

  /**
     *
     * @returns {{text: string, link: string}}
     */
  get data() {
    return this._data
  }

  /**
     * セーブ時のバリデーション
     * @param savedData
     * @returns {boolean}
     */
  validate(savedData) {
    if (this._data.link === '' || this._data.text === '') {
      return false
    }

    return true
  }

  /**
     *
     * @param block
     * @returns {{caption: string, text: string, alignment: string}}
     */
  save(block) {
    return this._data
  }

  /**
     * タグを全部削除する
     * @returns {{link: boolean, text: boolean}}
     */
  static get sanitize() {
    return {
      text: false,
      link: false
    }
  }

  /**
     *
     * @param data
     * @param config
     * @param api
     * @param readOnly
     */
  constructor({
    data, config, api, readOnly
  }) {
    this.api = api
    this.readOnly = readOnly

    this.nodes = {
      wrapper: null,
      container: null,
      inputHolder: null,
      toggleHolder: null,
      anyButtonHolder: null,
      textInput: null,
      linkInput: null,
      registButton: null,
      anyButton: null
    }
    // css overwrite
    const _CSS = {
      baseClass: this.api.styles.block,
      hide: 'hide',
      btn: 'btn',
      container: 'anyButtonContainer',
      input: 'anyButtonContainer__input',

      inputHolder: 'anyButtonContainer__inputHolder',
      inputText: 'anyButtonContainer__input--text',
      inputLink: 'anyButtonContainer__input--link',
      registButton: 'anyButtonContainer__registerButton',
      anyButtonHolder: 'anyButtonContainer__anyButtonHolder',
      btnColor: 'btn--default',
      toggleSwitch: 'toggle-switch',
      toggleInput: 'toggle-input',
      toggleLabel: 'toggle-label',
      inputBox: 'cdx-input--box',
      buttonBox: 'button-box',
      buttonSave: 'save',
      buttonEdit: 'edit'
    }

    this.CSS = Object.assign(_CSS, config.css)

    this.data = {
      link: '',
      text: ''
    }
    this.data = data
  }

  render() {
    this.nodes.wrapper = this.make('div', this.CSS.baseClass, { tabindex: '0' })
    this.nodes.container = this.make('div', this.CSS.container) // twitter-embed-tool

    // 入力用
    this.nodes.inputHolder = this.makeInputHolder()
    // toggle
    this.nodes.toggleHolder = this.makeToggle()
    // display button
    this.nodes.anyButtonHolder = this.makeAnyButtonHolder()

    this.nodes.container.appendChild(this.nodes.toggleHolder)
    this.nodes.container.appendChild(this.nodes.inputHolder)
    this.nodes.container.appendChild(this.nodes.anyButtonHolder)
    if (this._data.link !== '') {
      this.init()
      this.show(AnyButton.STATE.VIEW)
    }

    this.nodes.wrapper.appendChild(this.nodes.container)

    return this.nodes.wrapper
  }

  makeInputHolder() {
    const inputHolder = this.make('div', [this.CSS.inputHolder])

    const textInputBox = this.make('div', [this.CSS.inputBox, this.CSS.inputText])
    this.nodes.textInput = this.make('div', [this.CSS.input, this.api.styles.input], {
      contentEditable: !this.readOnly
    })
    this.nodes.textInput.dataset.placeholder = this.api.i18n.t('Button Text')
    textInputBox.appendChild(this.nodes.textInput)
    // this.nodes.textInput = this.make('div', [this.api.styles.input, this.CSS.input, this.CSS.inputText], {
    //   contentEditable: !this.readOnly
    // })
    
    const linkInputBox = this.make('div', [this.CSS.inputBox, this.CSS.inputLink])
    this.nodes.linkInput = this.make('div', [this.CSS.input, this.api.styles.input], {
      contentEditable: !this.readOnly
    })
    this.nodes.linkInput.dataset.placeholder = this.api.i18n.t('Link Url')
    linkInputBox.appendChild(this.nodes.linkInput)
 
    // this.nodes.registButton = this.make('button', [this.api.styles.button, this.CSS.registButton])
    // this.nodes.registButton.type = 'button'
    // this.nodes.registButton.textContent = this.api.i18n.t('Set')

    // this.nodes.registButton.addEventListener('click', (event) => {
    //   this.data = {
    //     link: this.nodes.linkInput.textContent,
    //     text: this.nodes.textInput.textContent
    //   }
    //   this.show(AnyButton.STATE.VIEW)
    // })

    inputHolder.appendChild(textInputBox)
    inputHolder.appendChild(linkInputBox)
    // inputHolder.appendChild(this.nodes.registButton)

    return inputHolder
  }
  getCursorXPosition(element) {
    var range = window.getSelection().getRangeAt(0)
    var preSelectionRange = range.cloneRange()
    preSelectionRange.selectNodeContents(element)
    preSelectionRange.setEnd(range.startContainer, range.startOffset)
    var cursorOffset = preSelectionRange.toString().length
  
    var divStyle = window.getComputedStyle(element)
    var divPaddingLeft = parseInt(divStyle.getPropertyValue('padding-left'))
    var divBorderLeft = parseInt(divStyle.getPropertyValue('border-left-width'))
    var cursorX = divPaddingLeft + divBorderLeft + cursorOffset
    
    return cursorX
  }

  init() {
    this.nodes.textInput.textContent = this._data.text
    this.nodes.linkInput.textContent = this._data.link
  }

  show(state) {
    this.nodes.anyButton.textContent = this._data.text
    // this.nodes.anyButton.setAttribute('href', this._data.link)
    // this.nodes.anyButton.setAttribute('href', 'javascript: void(0)') // 阻止跳转
    this.changeState(state)
  }

  makeAnyButtonHolder() {
    const anyButtonHolder = this.make('div', [this.CSS.hide, this.CSS.anyButtonHolder])
    this.nodes.anyButton = this.make('span', [this.CSS.btn, this.CSS.btnColor], {
      // target: '_blank',
      // rel: 'nofollow noindex noreferrer'
    })
    this.nodes.anyButton.textContent = this.api.i18n.t('Default Button')
    anyButtonHolder.appendChild(this.nodes.anyButton)
    return anyButtonHolder
  }

  changeState(state) {
    switch (state) {
      case AnyButton.STATE.EDIT:
        this.nodes.inputHolder.classList.remove(this.CSS.hide)
        this.nodes.anyButtonHolder.classList.add(this.CSS.hide)
        // this.nodes.toggleInput.checked = 0

        break
      case AnyButton.STATE.VIEW:
        this.nodes.inputHolder.classList.add(this.CSS.hide)
        this.nodes.anyButtonHolder.classList.remove(this.CSS.hide)
        // this.nodes.toggleInput.checked = 1
        break
    }
  }

  makeToggle() {
    /**
         * <div class="toggle-switch">
         <input id="toggle" class="toggle-input" type='checkbox' />
         <label for="toggle" class="toggle-label"/>
         </div>
         */
    const toggleHolder = this.make('div', [this.CSS.toggleSwitch])
    this.nodes.buttonBox = this.make('span', [this.CSS.buttonBox, this.CSS.buttonEdit])
    this.nodes.buttonBox.innerText = this.api.i18n.t('Edit')
    this.nodes.buttonBox.addEventListener('click', this.buttonClickHandle.bind(this))
    // this.nodes.toggleInput = this.make(
    //   'input',
    //   [this.CSS.toggleInput],
    //   {
    //     type: 'checkbox',
    //     id: 'toggle'
    //   }
    // )
    // const label = this.make('label', [this.CSS.toggleLabel], { for: 'toggle' })

    
    // this.nodes.toggleInput.addEventListener('change', (event) => {
    //   this.data = {
    //     link: this.nodes.linkInput.textContent,
    //     text: this.nodes.textInput.textContent
    //   }
    //   this.show(Number(this.nodes.toggleInput.checked))
    // })
    // toggleHolder.appendChild(this.nodes.toggleInput)
    // toggleHolder.appendChild(label)
    toggleHolder.appendChild(this.nodes.buttonBox)
    return toggleHolder
  }

  buttonClickHandle() {
    const buttonBox = this.nodes.buttonBox 
    const state = buttonBox.classList.contains(this.CSS.buttonEdit) ? AnyButton.STATE.EDIT : AnyButton.STATE.VIEW
    if (state === AnyButton.STATE.EDIT) {
      buttonBox.classList.remove(this.CSS.buttonEdit)
      buttonBox.classList.add(this.CSS.buttonSave)
      buttonBox.textContent = this.api.i18n.t('Save')
    } else {
      buttonBox.classList.remove(this.CSS.buttonSave)
      buttonBox.classList.add(this.CSS.buttonEdit)
      buttonBox.textContent = this.api.i18n.t('Edit')
    }
    this.data = {
      link: this.nodes.linkInput.innerText,
      text: this.nodes.textInput.innerText
    }
    this.show(state)
  }

  /**
     * node 作成用
     * @param tagName
     * @param classNames
     * @param attributes
     * @returns {*}
     */
  make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName)

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames)
    } else if (classNames) {
      el.classList.add(classNames)
    }
    for (const attrName in attributes) {
        el.setAttribute(attrName, attributes[attrName])
    }

    return el
  }
  /**
   * svg图标创建
   * @param {String} type 返回svg图标类型
   */
  // makeSvg(type) {
  //   var svgString = type === 'open' 
  //     ? '<svg t="1702432655142" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19368" width="20" height="20"><path d="M227.555556 256m28.444444 0l199.111111 0q28.444444 0 28.444445 28.444444l0 0q0 28.444444-28.444445 28.444445l-199.111111 0q-28.444444 0-28.444444-28.444445l0 0q0-28.444444 28.444444-28.444444Z" fill="#333333" p-id="19369"></path><path d="M568.888889 256m28.444444 0l199.111111 0q28.444444 0 28.444445 28.444444l0 0q0 28.444444-28.444445 28.444445l-199.111111 0q-28.444444 0-28.444444-28.444445l0 0q0-28.444444 28.444444-28.444444Z" fill="#333333" p-id="19370"></path><path d="M227.555556 483.555556m28.444444 0l199.111111 0q28.444444 0 28.444445 28.444444l0 0q0 28.444444-28.444445 28.444444l-199.111111 0q-28.444444 0-28.444444-28.444444l0 0q0-28.444444 28.444444-28.444444Z" fill="#333333" p-id="19371"></path><path d="M568.888889 483.555556m28.444444 0l199.111111 0q28.444444 0 28.444445 28.444444l0 0q0 28.444444-28.444445 28.444444l-199.111111 0q-28.444444 0-28.444444-28.444444l0 0q0-28.444444 28.444444-28.444444Z" fill="#333333" p-id="19372"></path><path d="M227.555556 711.111111m28.444444 0l199.111111 0q28.444444 0 28.444445 28.444445l0 0q0 28.444444-28.444445 28.444444l-199.111111 0q-28.444444 0-28.444444-28.444444l0 0q0-28.444444 28.444444-28.444445Z" fill="#333333" p-id="19373"></path><path d="M568.888889 711.111111m28.444444 0l199.111111 0q28.444444 0 28.444445 28.444445l0 0q0 28.444444-28.444445 28.444444l-199.111111 0q-28.444444 0-28.444444-28.444444l0 0q0-28.444444 28.444444-28.444445Z" fill="#333333" p-id="19374"></path></svg>'
  //     : '<svg t="1702433110397" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19507" width="20" height="20"><path d="M227.555556 256m28.444444 0l512 0q28.444444 0 28.444444 28.444444l0 0q0 28.444444-28.444444 28.444445l-512 0q-28.444444 0-28.444444-28.444445l0 0q0-28.444444 28.444444-28.444444Z" fill="#333333" p-id="19508"></path><path d="M227.555556 483.555556m28.444444 0l512 0q28.444444 0 28.444444 28.444444l0 0q0 28.444444-28.444444 28.444444l-512 0q-28.444444 0-28.444444-28.444444l0 0q0-28.444444 28.444444-28.444444Z" fill="#333333" p-id="19509"></path><path d="M227.555556 711.111111m28.444444 0l512 0q28.444444 0 28.444444 28.444445l0 0q0 28.444444-28.444444 28.444444l-512 0q-28.444444 0-28.444444-28.444444l0 0q0-28.444444 28.444444-28.444445Z" fill="#333333" p-id="19510"></path></svg>'
  //   // 创建一个临时元素用于解析SVG字符串
  //   var tempElement = document.createElement("div");
  //   tempElement.innerHTML = svgString;
  //   var svgElement = tempElement.firstChild;
  //   return svgElement;
  // }
}
