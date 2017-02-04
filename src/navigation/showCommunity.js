'use strict'
import { main$ } from '../components/main'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showCommunity (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Community Reach')
  main$.find('#community').show('explode', 700)
}
