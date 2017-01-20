import header from './header'
import homepage from './homepage'
import footer from './footer'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    header()
    homepage()
    footer()
  }
})()
