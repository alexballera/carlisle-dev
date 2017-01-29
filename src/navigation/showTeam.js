'use strict'
import $ from 'jquery'
import hideViews from './hideViews'

module.exports = function showTeam (e) {
  e.preventDefault()
  hideViews()
  $('#team').show('slow')
}
