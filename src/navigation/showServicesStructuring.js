'use strict'
import $ from 'jquery'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showServicesStructuring (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Services: Structuring')
  $('#services-structuring').show('slow')
}
