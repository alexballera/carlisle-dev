import header from './components/navbar-top'
import homepage from './homepage'
import about from './about'
import footer from './components/footer'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    header()
    homepage()
    about()
    footer()
  }
})()
