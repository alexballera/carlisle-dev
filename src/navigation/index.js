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
  var difference = main.find('#difference')

  // Top Navbar
  var topNavbar = $('#topNavbar')
  var navbarNav = topNavbar.find('#navbarNav')
  var linkHomeTop = topNavbar.find('#linkHome')
  var linkAboutTop = topNavbar.find('a#linkAbout')

  // Header Navbar
  var navbarHeaderAbout = main.find('#navbar-header-about')
  var linkAboutHeaderWhyWhy = navbarHeaderAbout.find('#link-about-1')
  var linkAboutHeaderWhyDifference = navbarHeaderAbout.find('#link-about-2')

  var navbarHeaderWhy = main.find('#navbar-header-why')
  var linkAboutWhyWhy = navbarHeaderWhy.find('#link-about-7')
  var linkAboutWhyDifference = navbarHeaderWhy.find('#link-about-8')

  var navbarHeaderDifference = main.find('#navbar-header-difference')
  var linkAboutHeaderDifferenceWhy = navbarHeaderDifference.find('#link-about-13')
  var linkAboutHeaderDifferenceDifference = navbarHeaderDifference.find('#link-about-14')

  // BREADCRUMB
  // About Page
  var breadcrumbAbout = $('#breadcrumb-about')
  var linkBreadcrumbAboutHome = breadcrumbAbout.find('#breadcrumb-link-1')
  // Why Page
  var breadcrumbWhy = $('#breadcrumb-why')
  var linkBreadcrumbWhyHome = breadcrumbWhy.find('#breadcrumb-link-7')
  var linkBreadcrumbWhyAbout = breadcrumbWhy.find('#breadcrumb-link-8')
  // Difference Page
  var breadcrumbDifference = $('#breadcrumb-difference')
  var linkBreadcrumbDifferenceHome = breadcrumbDifference.find('#breadcrumb-link-13')
  var linkBreadcrumbDifferenceAbout = breadcrumbDifference.find('#breadcrumb-link-14')

  // mediaQuery.addListener()

  function hiDefault () {
    about.hide()
    why.hide()
    difference.hide()
  }
  hiDefault()

  // Functions Show Views
  function showDifference () {
    navbarNav.removeClass('show')
    home.hide()
    about.hide()
    why.hide()
    difference.show('slow')
  }

  function showWhy () {
    navbarNav.removeClass('show')
    home.hide()
    about.hide()
    difference.hide()
    why.show('slow')
  }

  function showAbout () {
    navbarNav.removeClass('show')
    home.hide()
    why.hide()
    difference.hide()
    about.show('slow')
  }

  function showHome () {
    navbarNav.removeClass('show')
    about.hide()
    why.hide()
    difference.hide()
    home.show('slow')
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
  linkAboutHeaderWhyWhy.on('click', (e) => {
    e.preventDefault()
    showWhy()
  })

  linkAboutHeaderWhyDifference.on('click', (e) => {
    e.preventDefault()
    showDifference()
  })

  linkAboutWhyWhy.on('click', (e) => {
    e.preventDefault()
    showWhy()
  })

  linkAboutWhyDifference.on('click', (e) => {
    e.preventDefault()
    showDifference()
  })

  linkAboutHeaderDifferenceWhy.on('click', (e) => {
    e.preventDefault()
    showWhy()
  })

  linkAboutHeaderDifferenceDifference.on('click', (e) => {
    e.preventDefault()
    console.log('Click en our difference')
    showDifference()
  })

  // BREADCRUMB
  // About Page
  linkBreadcrumbAboutHome.on('click', (e) => {
    e.preventDefault()
    showHome()
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

  // Difference Page
  linkBreadcrumbDifferenceHome.on('click', (e) => {
    e.preventDefault()
    showHome()
  })
  linkBreadcrumbDifferenceAbout.on('click', (e) => {
    e.preventDefault()
    showAbout()
  })
}
