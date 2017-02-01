'use strict'
import $ from 'jquery'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showCareers (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Careers')
  $('#careers').show('slow')
}
