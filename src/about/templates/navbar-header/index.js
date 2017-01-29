'use strict'

import yo from 'yo-yo'
import showWhy from '../../../navigation/showWhy'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  about: yo`  
  <ul class="nav" id="navbar-header-about">
    <li class="nav-item">
      <a class="nav-link nav-link-about" href="" onclick=${showWhy}>Why Carlisle</a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-link-about" href="" onclick=${showDifference}>Our Difference</a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-link-about" href="" onclick=${showCommunity}>Community Reach</a>
    </li>
  </ul>`
}
