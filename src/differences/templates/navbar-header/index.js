'use strict'

import yo from 'yo-yo'
import showWhy from '../../../navigation/showWhy'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  template: yo`  
  <ul class="nav" id="navbar-header-difference">
    <li class="nav-item nav-item-difference">
      <a class="nav-link nav-link-difference nav-link-home" href="" onclick=${showWhy}>Why Carlisle?</a>
    </li>
    <li class="nav-item nav-item-difference">
      <a class="nav-link nav-link-difference" href="" onclick=${showDifference}>About Us</a>
    </li>
    <li class="nav-item nav-item-difference">
      <a class="nav-link nav-link-difference" href="" onclick=${showCommunity}>Our Difference</a>
    </li>
  </ul>`
}
