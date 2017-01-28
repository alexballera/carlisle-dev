'use strict'
import $ from 'jquery'
import hideViews from './hideViews'

module.exports = function showWhy (e) {
  e.preventDefault()
  hideViews()
  $('#why').show('slow')
}
