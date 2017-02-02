'use strict'
import hideViews from './hideViews'
import { main$ } from '../components/main'
import title from 'title'

module.exports = function showDifference (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Our Difference')
  main$.find('#difference').show('slow')
}
