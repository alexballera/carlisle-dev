import header from './components/navbar-top'
import homepage from './homepage'
import about from './about'
import why from './why'
import differences from './differences'
import community from './community'
import footer from './components/footer'
import navigation from './navigation'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    header()
    homepage()
    about()
    why()
    differences()
    community()
    footer()
    navigation()
  }
})()
