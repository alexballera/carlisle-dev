'use strict'

import $ from 'jquery'

export default () => {
  // var mediaQuery = window.matchMedia('screen and (min-width: 998px)')
  // var mq = mediaQuery.matches
  var main = $('#main')
  var topNavbar = $('#topNavbar')
  var navbarNav = topNavbar.find('#navbarNav')
  var linkHome = topNavbar.find('#linkHome')
  var linkAbout = topNavbar.find('a#linkAbout')
  var about = main.find('#about')
  var home = main.find('#home')

  // mediaQuery.addListener()

  function hiDefault () {
    about.hide()
  }
  hiDefault()

  function showAbout () {
    about.show('slow')
    home.hide()
    navbarNav.removeClass('show')
  }

  function showHome () {
    home.show('slow')
    about.hide()
    // navbarNav.removeClass('show')
  }

  linkAbout.on('click', (e) => {
    e.preventDefault()
    showAbout()
  })

  linkHome.on('click', (e) => {
    e.preventDefault()
    showHome()
  })
}
