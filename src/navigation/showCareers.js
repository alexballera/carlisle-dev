'use strict'
import { main$ } from '../components/main'
import hideViews from './hideViews'
import title from 'title'

module.exports = function showCareers (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Careers')
  main$.find('#careers').show('slow')
}
