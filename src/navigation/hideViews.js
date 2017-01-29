'use strict'
import $ from 'jquery'

module.exports = function hideViews () {
  var navbarNav = $('#navbarNav')
  var main = $('#main')
  var about = main.find('#about')
  var home = main.find('#home')
  var why = main.find('#why')
  var difference = main.find('#difference')
  var community = main.find('#community')
  var team = main.find('#team')
  var services = main.find('#services')
  var careers = main.find('#careers')

  navbarNav.removeClass('show')
  home.hide()
  about.hide()
  why.hide()
  difference.hide()
  community.hide()
  team.hide()
  careers.hide()
  services.hide()
}
