'use strict'

import $ from 'jquery'
// import showHome from './showHome'

export default () => {
  var main = $('#main')
  var about = main.find('#about')
  var home = main.find('#home')
  var why = main.find('#why')
  var difference = main.find('#difference')
  var community = main.find('#community')

  about.hide()
  why.hide()
  difference.hide()
  community.hide()
  home.show()
}
