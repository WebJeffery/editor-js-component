export const isObject = function (item: object) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * 深度合并对象
 * @param target 目标对象
 * @param source 合并对象
 * @returns Object
 */
export function deepMerge(target, source) {
  if (!isObject(target)) return target

  const output = { ...target }
  // 判断是否为对象
  if (isObject(source)) {
    Object.keys(source).forEach((key) => {
      // 如果源对象的属性是对象，递归深度合并
      if (isObject(source[key])) {
        if (!output[key]) {
          // 如果目标对象没有对应的属性，直接赋值
          Object.assign(output, { [key]: {} })
        }
        // 递归深度合并
        deepMerge(output[key], source[key])
      } else {
        // 否则直接赋值
        Object.assign(output, { [key]: source[key] })
      }
    })
  }
  return output
}

export const sanitizeHtml = function (markup: string) {
  return markup
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export const embedMarkups = {
  youtube: '<div class="embed"><iframe class="embed-youtube" frameborder="0" src="<%data.embed%>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen <%data.length%>></iframe></div>',

  twitter: '<blockquote class="twitter-tweet" class="embed-twitter" <%data.length%>><a href="<%data.source%>"></a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>',

  instagram: '<blockquote class="instagram-media" <%data.length%>><a href="<%data.embed%>/captioned"></a></blockquote><script async defer src="//www.instagram.com/embed.js"></script>',

  codepen: '<div class="embed"><iframe <%data.length%> scrolling="no" src="<%data.embed%>" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>',

  defaultMarkup: '<div class="embed"><iframe src="<%data.embed%>" <%data.length%> class="embed-unknown" allowfullscreen="true" frameborder="0" ></iframe></div>'
}
