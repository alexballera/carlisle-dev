'use strict'
import $ from 'jquery'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showContact (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Contact')
  $('#contact').show('slow')
}
