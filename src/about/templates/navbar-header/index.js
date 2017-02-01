'use strict'

import yo from 'yo-yo'
import showWhy from '../../../navigation/showWhy'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  template: yo`  
  <ul class="nav row no-gutters justify-content-start" id="navbar-header-about">
    <li class="nav-item offset-2 col-3 col-md-2">
      <a class="nav-link nav-link-about" href="" onclick=${showWhy}>Why Carlisle?</a>
    </li>
    <li class="nav-item col-3 col-md-2">
      <a class="nav-link nav-link-about" href="" onclick=${showDifference}>Our Difference</a>
    </li>
    <li class="nav-item col-3 col-md-2">
      <a class="nav-link nav-link-about" href="" onclick=${showCommunity}>Community Reach</a>
    </li>
  </ul>`
}
