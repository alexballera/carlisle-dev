'use strict'
import hideViews from './hideViews'
import title from 'title'
import { main$ } from '../components/main'

module.exports = function showContact (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Contact')
  main$.find('#contact').show('explode', 700)
}
