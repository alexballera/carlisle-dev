import navbar from './navbar'
import homepage from './homepage'
import footer from './footer'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    navbar()
    homepage()
    footer()
  }
})()
