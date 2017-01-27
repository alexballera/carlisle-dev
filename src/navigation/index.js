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
  var why = main.find('#why')

  var navbarHeaderAbout = main.find('#navbar-header-about')
  var linkWhy1 = navbarHeaderAbout.find('#link-about-1')

  var breadcrumb = $('#breadcrumb')

  // mediaQuery.addListener()

  function hiDefault () {
    about.hide()
    why.hide()
  }
  hiDefault()

  function showAbout () {
    home.hide()
    about.show('slow')
    why.hide()
    navbarNav.removeClass('show')
  }

  function showWhy () {
    home.hide()
    about.hide()
    why.show('slow')
    navbarNav.removeClass('show')
  }

  function showHome () {
    home.show('slow')
    about.hide()
    why.hide()
    navbarNav.removeClass('show')
  }

  // Top Navbar

  linkAbout.on('click', (e) => {
    e.preventDefault()
    showAbout()
  })

  linkHome.on('click', (e) => {
    e.preventDefault()
    showHome()
  })

  // Header Navbar
  linkWhy1.on('click', (e) => {
    e.preventDefault()
    showWhy()
  })

  // Breadcrumb

  breadcrumb.find('#breadcrumb-link-1').on('click', (e) => {
    e.preventDefault()
    showHome()
  })
}
