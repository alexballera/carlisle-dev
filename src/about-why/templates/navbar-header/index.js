'use strict'

import yo from 'yo-yo'
import showWhy from '../../../navigation/showWhy'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  template: yo`  
  <ul class="nav row no-gutters justify-content-start" id="navbar-header-why">
    <li class="nav-item nav-item-why offset-2 col-3 col-md-2">
      <a class="nav-link nav-link-why nav-link-home" href="" onclick=${showWhy}></a>
    </li>
    <li class="nav-item nav-item-why col-3 col-md-2">
      <a class="nav-link nav-link-why" href="" onclick=${showDifference}>About Us</a>
    </li>
    <li class="nav-item nav-item-why col-3 col-md-2">
      <a class="nav-link nav-link-why" href="" onclick=${showCommunity}>Why Carlisle</a>
    </li>
  </ul>`
}
