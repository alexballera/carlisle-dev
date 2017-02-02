'use strict'
import { main$ } from '../components/main'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showAbout (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - About Us')
  main$.find('#about').show('slow')
}
