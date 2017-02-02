'use strict'
import { main } from '../main'
export default () => {
  var div = document.createElement('div')
  div.setAttribute('class', 'loader')
  main.appendChild(div)
}
