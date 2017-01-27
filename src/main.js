import header from './components/navbar-top'
import homepage from './homepage'
import about from './about'
import why from './why'
import footer from './components/footer'
import navigation from './navigation'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    header()
    about()
    homepage()
    why()
    footer()
    navigation()
  }
})()
