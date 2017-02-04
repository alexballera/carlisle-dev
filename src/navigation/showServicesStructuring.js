'use strict'
import hideViews from './hideViews'
import title from 'title'
import { main$ } from '../components/main'

module.exports = function showServicesStructuring (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Services: Structuring')
  main$.find('#services-structuring').show('explode', 700)
}
