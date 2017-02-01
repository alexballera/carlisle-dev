'use strict'
import $ from 'jquery'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showAbout (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - About Us')
  $('#about').show('slow')
}
