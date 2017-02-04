'use strict'
import hideViews from './hideViews'
import title from 'title'
import { main$ } from '../components/main'

module.exports = function showTeam (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Team')
  main$.find('#team').show('explode', 700)
}
