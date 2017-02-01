'use strict'
import $ from 'jquery'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showDifference (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Our Difference')
  $('#difference').show('slow')
}
