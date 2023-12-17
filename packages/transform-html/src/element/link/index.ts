import './index.pcss'
import { LinkToolBlock, LinkToolBlockMeta, Props } from '../../interfaces'
import { baseBlock, make } from '../../utils'

const CSS = {
  baseClass: 'cdx-block',
  input: 'cdx-input',

  container: 'link-tool',
  inputEl: 'link-tool__input',
  inputHolder: 'link-tool__input-holder',
  inputError: 'link-tool__input-holder--error',
  linkContent: 'link-tool__content',
  linkContentRendered: 'link-tool__content--rendered',
  linkImage: 'link-tool__image',
  linkTitle: 'link-tool__title',
  linkDescription: 'link-tool__description',
  linkText: 'link-tool__anchor',
  progress: 'link-tool__progress',
  progressLoading: 'link-tool__progress--loading',
  progressLoaded: 'link-tool__progress--loaded'
}

export function linkTool({ data }: Props<LinkToolBlock>) {
  const nodes = {
    wrapper: make('div', CSS.baseClass),
    container: make('div', CSS.container),
    linkImage: make('div', CSS.linkImage),
    linkTitle: make('div', CSS.linkTitle),
    linkDescription: make('p', CSS.linkDescription),
    linkText: make('span', CSS.linkText),
    linkContent: make('a', CSS.linkContent, {
      target: '_blank',
      rel: 'nofollow noindex noreferrer'
    })
  }

  nodes.container.appendChild(nodes.linkContent)
  /**
     * If Tool already has data, render link preview, otherwise insert input
     */
  if (Object.keys(data.meta).length) {
    nodes.container.appendChild(nodes.linkContent)
    showLinkPreview(data.meta, data.link, nodes)
  }

  nodes.wrapper.appendChild(nodes.container)

  const trueWrapper = make('div')
  trueWrapper.appendChild(nodes.wrapper)
  return baseBlock(trueWrapper.innerHTML)
}

function showLinkPreview({ image, title, description }: LinkToolBlockMeta, link: string, nodes: any) {
  if (image && image.url) {
    nodes.linkImage.style.backgroundImage = `url(${image.url})`
    nodes.linkContent.appendChild(nodes.linkImage)
  }

  if (title) {
    nodes.linkTitle.textContent = title
    nodes.linkContent.appendChild(nodes.linkTitle)
  }

  if (description) {
    nodes.linkDescription.textContent = description
    nodes.linkContent.appendChild(nodes.linkDescription)
  }

  nodes.linkContent.classList.add(CSS.linkContentRendered)
  nodes.linkContent.setAttribute('href', link)
  nodes.linkContent.appendChild(nodes.linkText)

  try {
    nodes.linkText.textContent = (new URL(link)).hostname
  } catch (e) {
    nodes.linkText.textContent = link
  }
}
