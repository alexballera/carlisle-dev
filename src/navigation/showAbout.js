'use strict'
import $ from 'jquery'
import hideViews from './hideViews'

module.exports = function showAbout (e) {
  e.preventDefault()
  hideViews()
  $('#about').show('slow')
}
