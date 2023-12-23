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
