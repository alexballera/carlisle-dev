'use strict'
import $ from 'jquery'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showHome (e) {
  hideViews()
  title('Carlisle - Innovations Diversified Investment Solutions')
  $('#home').show('slow')
}
