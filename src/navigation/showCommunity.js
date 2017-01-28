'use strict'
import $ from 'jquery'
import hideViews from './hideViews'

module.exports = function showCommunity (e) {
  e.preventDefault()
  hideViews()
  $('#community').show('slow')
}
