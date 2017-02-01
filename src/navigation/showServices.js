'use strict'
import $ from 'jquery'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showServices (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Services')
  $('#services').show('slow')
}
