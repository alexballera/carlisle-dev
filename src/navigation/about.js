'use strict'

import $ from 'jquery'
import {showAbout} from './navigation'

export default () => {
  var topNavbar = $('#topNavbar')
  var linkAboutTop = topNavbar.find('a#linkAbout')
  linkAboutTop.on('click', (e) => {
    e.preventDefault()
    showAbout()
  })
}
