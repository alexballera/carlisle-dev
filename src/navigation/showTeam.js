'use strict'
import $ from 'jquery'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showTeam (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Team')
  $('#team').show('slow')
}
