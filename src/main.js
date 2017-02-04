global.jQuery = require('jquery')
require('jquery-ui-dist/jquery-ui')
import tether from 'tether'
global.Tether = tether
require('bootstrap')
import header from './components/navbar-top'
import loader from './components/loader'
import homepage from './homepage'
import about from './about'
import why from './about-why'
import differences from './about-differences'
import community from './about-community'
import team from './team'
import services from './services'
import servicesStructuring from './services-structuring'
import careers from './careers'
import contact from './contact'
import footer from './components/footer'
import navigation from './navigation'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    header()
    loader()
    homepage()
    about()
    why()
    differences()
    community()
    team()
    services()
    servicesStructuring()
    careers()
    contact()
    footer()
    navigation()
  }
})()
