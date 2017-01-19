import header from './header'
import footer from './footer'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    header()
    footer()
  }
})()
