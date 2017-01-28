'use strict'
import $ from 'jquery'
import hideViews from './hideViews'

module.exports = function showHome (e) {
  e.preventDefault()
  hideViews()
  $('#home').show('slow')
}
