'use strict'

import $ from 'jquery'

export default () => {
  // var mediaQuery = window.matchMedia('screen and (min-width: 998px)')
  // var mq = mediaQuery.matches
  var main = $('#main')
  var topNavbar = $('#topNavbar')
  // var ul = navbarNav.find('ul.navbar-nav')
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
  }

  function showHome () {
    home.show('slow')
    about.hide()
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
