'use strict'
import $ from 'jquery'
import hideViews from './hideViews'

module.exports = function showDifference (e) {
  e.preventDefault()
  hideViews()
  $('#difference').show('slow')
}
