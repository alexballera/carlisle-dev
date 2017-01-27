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
  var community = main.find('#community')

  // Top Navbar
  var topNavbar = $('#topNavbar')
  var navbarNav = topNavbar.find('#navbarNav')
  var linkHomeTop = topNavbar.find('#linkHome')
  var linkAboutTop = topNavbar.find('a#linkAbout')

  // HEADER NAVBAR
  // About
  var navbarHeaderAbout = main.find('#navbar-header-about')
  var linkAboutHeaderWhyWhy = navbarHeaderAbout.find('#link-about-1')
  var linkAboutHeaderWhyDifference = navbarHeaderAbout.find('#link-about-2')
  var linkAboutHeaderWhyCommunity = navbarHeaderAbout.find('#link-about-3')
  // Why
  var navbarHeaderWhy = main.find('#navbar-header-why')
  var linkAboutWhyWhy = navbarHeaderWhy.find('#link-about-7')
  var linkAboutWhyDifference = navbarHeaderWhy.find('#link-about-8')
  var linkAboutWhyCommunity = navbarHeaderWhy.find('#link-about-9')
  // Difference
  var navbarHeaderDifference = main.find('#navbar-header-difference')
  var linkAboutHeaderDifferenceWhy = navbarHeaderDifference.find('#link-about-13')
  var linkAboutHeaderDifferenceDifference = navbarHeaderDifference.find('#link-about-14')
  var linkAboutHeaderDifferenceCommunity = navbarHeaderDifference.find('#link-about-15')
  // Community
  var navbarHeaderCommunity = main.find('#navbar-header-community')
  var linkAboutHeaderCommunityWhy = navbarHeaderCommunity.find('#link-about-19')
  var linkAboutHeaderCommunityDifference = navbarHeaderCommunity.find('#link-about-20')
  var linkAboutHeaderCommunityCommunity = navbarHeaderCommunity.find('#link-about-21')

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
  // Community Page
  var breadcrumbCommunity = $('#breadcrumb-community')
  var linkBreadcrumbCommunityHome = breadcrumbCommunity.find('#breadcrumb-link-13')
  var linkBreadcrumbCommunityAbout = breadcrumbCommunity.find('#breadcrumb-link-14')

  // mediaQuery.addListener()

  function hideDefault () {
    about.hide()
    why.hide()
    difference.hide()
    community.hide()
  }
  hideDefault()

  function hideAllViews () {
    navbarNav.removeClass('show')
    home.hide()
    hideDefault()
  }

  // Functions Show Views
  function showCommunity () {
    hideAllViews()
    community.show('slow')
  }

  function showDifference () {
    hideAllViews()
    difference.show('slow')
  }

  function showWhy () {
    hideAllViews()
    why.show('slow')
  }

  function showAbout () {
    hideAllViews()
    about.show('slow')
  }

  function showHome () {
    hideAllViews()
    home.show('slow')
  }

  // TOP NAVBAR

  linkAboutTop.on('click', (e) => {
    e.preventDefault()
    showAbout()
  })

  linkHomeTop.on('click', (e) => {
    e.preventDefault()
    showHome()
  })

  // HEADER NAVBAR
  // About
  linkAboutHeaderWhyWhy.on('click', (e) => {
    e.preventDefault()
    showWhy()
  })
  linkAboutHeaderWhyDifference.on('click', (e) => {
    e.preventDefault()
    showDifference()
  })
  linkAboutHeaderWhyCommunity.on('click', (e) => {
    e.preventDefault()
    showCommunity()
  })
  // Why
  linkAboutWhyWhy.on('click', (e) => {
    e.preventDefault()
    showWhy()
  })
  linkAboutWhyDifference.on('click', (e) => {
    e.preventDefault()
    showDifference()
  })
  linkAboutWhyCommunity.on('click', (e) => {
    e.preventDefault()
    showCommunity()
  })
  // Difference
  linkAboutHeaderDifferenceWhy.on('click', (e) => {
    e.preventDefault()
    showWhy()
  })
  linkAboutHeaderDifferenceDifference.on('click', (e) => {
    e.preventDefault()
    showDifference()
  })
  linkAboutHeaderDifferenceCommunity.on('click', (e) => {
    e.preventDefault()
    showCommunity()
  })
  // Community
  linkAboutHeaderCommunityWhy.on('click', (e) => {
    e.preventDefault()
    showWhy()
  })
  linkAboutHeaderCommunityDifference.on('click', (e) => {
    e.preventDefault()
    showDifference()
  })
  linkAboutHeaderCommunityCommunity.on('click', (e) => {
    e.preventDefault()
    showCommunity()
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
  // Community Page
  linkBreadcrumbCommunityHome.on('click', (e) => {
    e.preventDefault()
    showHome()
  })
  linkBreadcrumbCommunityAbout.on('click', (e) => {
    e.preventDefault()
    showAbout()
  })
}
