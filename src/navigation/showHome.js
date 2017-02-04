'use strict'
import hideViews from './hideViews'
import title from 'title'
import { main$ } from '../components/main'

module.exports = function showHome (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - Innovations Diversified Investment Solutions')
  main$.find('#home').show('explode', 700)
}
