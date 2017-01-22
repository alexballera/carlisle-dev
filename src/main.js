import header from './components/navbar'
import homepage from './homepage'
import footer from './components/footer'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    header()
    homepage()
    footer()
  }
})()
