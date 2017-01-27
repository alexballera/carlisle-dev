'use strict'

import $ from 'jquery'

export default () => {
  // var mediaQuery = window.matchMedia('screen and (min-width: 998px)')
  // var mq = mediaQuery.matches
  var main = $('#main')

  // Views
  var about = main.find('#about')
  var home = main.find('#home')
  var why = main.find('#why')

  // Top Navbar
  var topNavbar = $('#topNavbar')
  var navbarNav = topNavbar.find('#navbarNav')
  var linkHomeTop = topNavbar.find('#linkHome')
  var linkAboutTop = topNavbar.find('a#linkAbout')

  // Header Navbar
  var navbarHeaderAbout = main.find('#navbar-header-about')
  var linkAboutHeaderWhy = navbarHeaderAbout.find('#link-about-1')

  // BREADCRUMB
  // About Page
  var breadcrumbAbout = $('#breadcrumb-about')
  var linkBreadcrumbAboutHome = breadcrumbAbout.find('#breadcrumb-link-1')
  var linkBreadcrumbAboutAbout = breadcrumbAbout.find('#breadcrumb-link-2')
  // Why Page
  var breadcrumbWhy = $('#breadcrumb-why')
  var linkBreadcrumbWhyHome = breadcrumbAbout.find('#breadcrumb-link-7')
  var linkBreadcrumbWhyAbout = breadcrumbWhy.find('#breadcrumb-link-8')
  var linkBreadcrumbWhyWhy = breadcrumbWhy.find('#breadcrumb-link-9')

  // mediaQuery.addListener()

  function hiDefault () {
    about.hide()
    why.hide()
  }
  hiDefault()

  // Functions Show Views
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

  linkAboutTop.on('click', (e) => {
    e.preventDefault()
    showAbout()
  })

  linkHomeTop.on('click', (e) => {
    e.preventDefault()
    showHome()
  })

  // Header Navbar
  linkAboutHeaderWhy.on('click', (e) => {
    e.preventDefault()
    showWhy()
  })

  // BREADCRUMB
  // About Page
  linkBreadcrumbAboutHome.on('click', (e) => {
    e.preventDefault()
    showHome()
  })
  linkBreadcrumbAboutAbout.on('click', (e) => {
    e.preventDefault()
    showAbout()
  })

  // Why Page
  linkBreadcrumbWhyHome.on('click', (e) => {
    e.preventDefault()
    showHome()
  })
  linkBreadcrumbWhyAbout.on('click', (e) => {
    e.preventDefault()
    showAbout()
  })
  linkBreadcrumbWhyWhy.on('click', (e) => {
    e.preventDefault()
    showWhy()
  })
}
