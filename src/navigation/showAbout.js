'use strict'
import { main$ } from '../components/main'
import hideViews from './hideViews'
import title from 'title'

export default function showAbout (e) {
  e.preventDefault()
  hideViews()
  title('Carlisle - About Us')
  main$.find('#about').show('explode', 700, cb)

  function cb () {
    console.log('En about')
  }
}
