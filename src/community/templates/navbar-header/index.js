'use strict'

import yo from 'yo-yo'
import showWhy from '../../../navigation/showWhy'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  template: yo`  
  <ul class="nav" id="navbar-header-community">
    <li class="nav-item nav-item-community">
      <a class="nav-link nav-link-community nav-link-home" href="" id="link-about-19" onclick=${showWhy}>Why Carlisle?</a>
    </li>
    <li class="nav-item nav-item-community">
      <a class="nav-link nav-link-community" href="" id="link-about-20" onclick=${showDifference}>Our Difference</a>
    </li>
    <li class="nav-item nav-item-community">
      <a class="nav-link nav-link-community" href="" id="link-about-21" onclick=${showCommunity}>Community Reach</a>
    </li>
    <li class="nav-item nav-item-community">
      <a class="nav-link nav-link-community" href="" id="link-about-22"></a>
    </li>
    <li class="nav-item nav-item-community">
      <a class="nav-link nav-link-community" href="" id="link-about-23"></a>
    </li>
    <li class="nav-item nav-item-community">
      <a class="nav-link nav-link-community" href="" id="link-about-24"></a>
    </li>
  </ul>`
}
