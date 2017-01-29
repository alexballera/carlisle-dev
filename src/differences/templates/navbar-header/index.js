'use strict'

import yo from 'yo-yo'
import showWhy from '../../../navigation/showWhy'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  template: yo`  
  <ul class="nav row no-gutters justify-content-start" id="navbar-header-difference">
    <li class="nav-item nav-item-difference offset-2 col-3 col-md-2">
      <a class="nav-link nav-link-difference nav-link-home" href="" onclick=${showWhy}>Why Carlisle?</a>
    </li>
    <li class="nav-item nav-item-difference col-3 col-md-2">
      <a class="nav-link nav-link-difference" href="" onclick=${showDifference}>About Us</a>
    </li>
    <li class="nav-item nav-item-difference col-3 col-md-2">
      <a class="nav-link nav-link-difference" href="" onclick=${showCommunity}>Our Difference</a>
    </li>
  </ul>`
}
