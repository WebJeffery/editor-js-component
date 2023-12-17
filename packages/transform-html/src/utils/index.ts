export * from './tool'

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
  console.error(new Error(`The Parser function of type "${type}" is not defined. Define your custom parser functions`))
  return ''
}
