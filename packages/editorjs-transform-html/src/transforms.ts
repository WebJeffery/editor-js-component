import edjsHTML from 'editorjs-html'
import { Transforms, Block } from './interfaces'

const headerParser = ({ data }: Block) => `<h${data.level}>${data.text}</h${data.level}>`

// html parsing rules
export const transforms: Transforms = {
  // Paragraph
  paragraph({ data }: Block, config) {
    return `<p class="${config.paragraph.pClass}"> ${data.text} </p>`
  },
  // Title level
  header: headerParser,
  h1: headerParser,
  h2: headerParser,
  h3: headerParser,
  h4: headerParser,
  h5: headerParser,
  h6: headerParser,
  // separator
  delimiter: () => '<div class="ce-delimiter"></div>',
  // image
  image: ({ data }: Block) => {
    const caption = data.caption ? data.caption : 'Image'

    return `<img src="${
      data.file && data.file.url ? data.file.url : data.url
    }" alt="${caption}" />`
  },
  // code: function (data, config) {
  //   const markup = sanitizeHtml(data.code);
  //   return `<pre><code class="${config.code.codeBlockClass}">${markup}</code></pre>`;
  // },
  // medium
  embed: (data: Block, config) => {
    console.log(data, config)
    // switch (data.service) {
    //   case 'vimeo':
    //     return `<iframe src="${data.embed}" height="${data.height}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
    //   case 'youtube':
    //     return `<iframe width="${data.width}" height="${data.height}" src="${data.embed}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    //   default:
    //     throw new Error(
    //       'Only Youtube and Vime Embeds are supported right now.'
    //     )
    // }
    if (config.embed.useProvidedLength) {
      data.length = `width="${data.width}" height="${data.height}"`
    } else {
      data.length = ''
    }
    const regex = new RegExp(/<%data\.(.+?)%>/, 'gm')
    if (config.embedMarkups[data.service]) {
      return config.embedMarkups[data.service].replace(
        regex,
        (match, p1) => data[p1]
      )
    }
    return config.embedMarkups.defaultMarkup.replace(
      regex,
      (match, p1) => data[p1]
    )
  },
  table({ data }: Block) {
    const rows = data.content.map((row) => `<tr>${row.reduce(
      (acc, cell) => `${acc}<td>${cell}</td>`,
      ''
    )}</tr>`)
    return `<table><tbody>${rows.join('')}</tbody></table>`
  }
}

export const parseHtml = (plugins = {}) => {
  const parsers = { ...transforms, ...plugins }

  return edjsHTML(parsers)
}
