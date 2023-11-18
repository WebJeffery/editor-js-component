export function baseBlock(content: string, wrapBlock: boolean) {
  return wrapBlock ? `<div class="ce-block"><div class="ce-block__content">${content}</div></div>` : content
}

export function make(
  tagName: string,
  classNames: string | string[] | null = null,
  attributes = {}
) {
  const el = document.createElement(tagName)

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames)
  } else if (classNames) {
    el.classList.add(classNames)
  }

  Object.keys(attributes).forEach((attrName: string) => {
    el[attrName] = attributes[attrName]
  })

  return el
}

export function ParseFunctionError(type: string) {
  return new Error(`\x1b[31m The Parser function of type "${type}" is not defined. \n
  Define your custom parser functions as: \x1b[34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks \x1b[0m`)
}
