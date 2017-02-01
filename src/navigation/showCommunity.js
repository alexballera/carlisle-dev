'use strict'
import $ from 'jquery'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showCommunity (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Community Reach')
  $('#community').show('slow')
}
