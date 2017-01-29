'use strict'
import $ from 'jquery'
import hideViews from './hideViews'

module.exports = function showServices (e) {
  e.preventDefault()
  hideViews()
  $('#services').show('slow')
}
