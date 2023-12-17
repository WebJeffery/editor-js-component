import { paragraph } from './paragraph'
import { header } from './header'
import { list } from './list'
import { code } from './code'
import { table } from './table'
import { checklist } from './checklist'
import { raw } from './raw'
import { quote } from './quote'
import { delimiter } from './delimiter'
import { image } from './image'
import { button } from './button'

export const transformElement = {
  paragraph,
  header,
  h1: header,
  h2: header,
  h3: header,
  h4: header,
  h5: header,
  h6: header,
  list,
  code,
  table,
  checklist,
  raw,
  quote,
  delimiter,
  image,
  button
}
