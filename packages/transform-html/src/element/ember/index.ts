/* eslint-disable @typescript-eslint/ban-ts-comment */
import './index.css'
import { EmbedBlock, Props } from '../../interfaces'
import { baseBlock, make } from '../../utils'
import Services from './services'

const CSS = {
  baseClass: 'cdx-block',
  container: 'embed-tool',
  containerLoading: 'embed-tool--loading',
  preloader: 'embed-tool__preloader',
  caption: 'embed-tool__caption',
  url: 'embed-tool__url',
  content: 'embed-tool__content'
}
export function embed({ data }: Props<EmbedBlock>) {
  const { html } = Services[data.service]
  const container = make(
    'div',
    [CSS.baseClass, CSS.container, CSS.containerLoading]
  )
  const caption = make(
    'div',
    [CSS.caption],

    {
      contentEditable: false
    }
  )
  const template = make('template') as HTMLTemplateElement

  caption.innerHTML = data.caption || ''

  template.innerHTML = html

  // @ts-ignore
  template.content.firstChild.setAttribute('src', data.embed)
  // @ts-ignore
  template.content.firstChild.classList.add(CSS.content)

  // const embedIsReady = this.embedIsReady(container);

  // @ts-ignore
  container.appendChild(template.content.firstChild)
  container.appendChild(caption)

  // embedIsReady
  //   .then(() => {
  //     container.classList.remove(this.CSS.containerLoading);
  //   });
  const wrapper = make('div')
  wrapper.appendChild(container)
  return baseBlock(wrapper.innerHTML)
}
