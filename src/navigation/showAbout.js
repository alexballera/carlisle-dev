'use strict'
import $ from 'jquery'
import hideViews from './hideViews'

module.exports = function showAbout (e) {
  e.preventDefault()
  var main = $('#main')
  var about = main.find('#about')

  hideViews()
  about.show('slow')
}
