'use strict'
import hideViews from './hideViews'
import title from 'title'
import { main$ } from '../components/main'

module.exports = function showServices (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Services')
  main$.find('#services').show('slow')
}
