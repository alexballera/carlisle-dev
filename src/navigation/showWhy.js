'use strict'
import $ from 'jquery'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showWhy (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Why Carlisle')
  $('#why').show('slow')
}
