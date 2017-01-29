'use strict'
import $ from 'jquery'
import hideViews from './hideViews'

module.exports = function showContact (e) {
  e.preventDefault()
  hideViews()
  $('#contact').show('slow')
}
