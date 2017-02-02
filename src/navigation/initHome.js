'use strict'
import hideViews from './hideViews'
import title from 'title'
import { main$ } from '../components/main'

module.exports = function showHome (e) {
  hideViews()
  title('Carlisle - Innovations Diversified Investment Solutions')
  var loader = main$.find('.loader')
  loader.show()

  setTimeout(() => {
    loader.hide()
    main$.find('#home').show('slow')
  }, 1000)
}
