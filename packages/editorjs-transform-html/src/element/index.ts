import { paragraph } from './paragraph'
import { header } from './header'

export const transformElement = {
  paragraph,
  header,
  h1: header,
  h2: header,
  h3: header,
  h4: header,
  h5: header,
  h6: header
}
