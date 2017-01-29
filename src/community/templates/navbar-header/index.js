'use strict'

import yo from 'yo-yo'
import showWhy from '../../../navigation/showWhy'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  template: yo`  
  <ul class="nav" id="navbar-header-community">
    <li class="nav-item nav-item-community">
      <a class="nav-link nav-link-community nav-link-home" href="" onclick=${showWhy}>Why Carlisle?</a>
    </li>
    <li class="nav-item nav-item-community">
      <a class="nav-link nav-link-community" href="" onclick=${showDifference}>Our Difference</a>
    </li>
    <li class="nav-item nav-item-community">
      <a class="nav-link nav-link-community" href="" onclick=${showCommunity}>Community Reach</a>
    </li>
  </ul>`
}
