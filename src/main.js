import header from './components/navbar-top'
// import homepage from './homepage'
import about from './about'
import footer from './components/footer'
import navigation from './lib/navigation.js'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    header()
    about()
    // homepage()
    footer()
    navigation()
  }
})()
