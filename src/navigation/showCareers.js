'use strict'
import $ from 'jquery'
import hideViews from './hideViews'

module.exports = function showCareers (e) {
  e.preventDefault()
  hideViews()
  $('#careers').show('slow')
}
