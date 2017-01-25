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
    home.hide('slow')
    about.show('slow')
    // ul.hide('slow')
  }

  function showHome () {
    home.show('slow')
    about.hide('slow')
    // ul.hide('slow')
  }

  linkAbout.click((e) => {
    e.preventDefault()
    showAbout()
  })

  linkHome.click((e) => {
    e.preventDefault()
    showHome()
  })
}
