'use strict'
import $ from 'jquery'
import hideViews from './hideViews'

module.exports = function showServicesStructuring (e) {
  e.preventDefault()
  hideViews()
  $('#services-structuring').show('slow')
}
