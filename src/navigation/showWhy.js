'use strict'
import hideViews from './hideViews'
import title from 'title'
import { main$ } from '../components/main'

module.exports = function showWhy (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Why Carlisle')
  main$.find('#why').show('slow')
}
