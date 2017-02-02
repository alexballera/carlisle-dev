'use strict'
import $ from 'jquery'
import { main$ } from '../components/main'

module.exports = function hideViews () {
  var navbarNav = $('#navbarNav')
  var loader = main$.find('.loader')
  var about = main$.find('#about')
  var home = main$.find('#home')
  var why = main$.find('#why')
  var difference = main$.find('#difference')
  var community = main$.find('#community')
  var team = main$.find('#team')
  var services = main$.find('#services')
  var servicesStructuring = main$.find('#services-structuring')
  var careers = main$.find('#careers')
  var contact = main$.find('#contact')

  navbarNav.removeClass('show')
  home.hide()
  loader.hide()
  about.hide()
  why.hide()
  difference.hide()
  community.hide()
  team.hide()
  careers.hide()
  contact.hide()
  services.hide()
  servicesStructuring.hide()
}
