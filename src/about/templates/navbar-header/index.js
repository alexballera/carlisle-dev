'use strict'

import yo from 'yo-yo'
import showWhy from '../../../navigation/showWhy'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  about: yo`  
  <ul class="nav" id="navbar-header-about">
    <li class="nav-item">
      <a class="nav-link nav-link-about" href="" id="link-about-1" onclick=${showWhy}>Why Carlisle</a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-link-about" href="" id="link-about-2" onclick=${showDifference}>Our Difference</a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-link-about" href="" id="link-about-3" onclick=${showCommunity}>Community Reach</a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-link-about" href="" id="link-about-4"></a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-link-about" href="" id="link-about-5"></a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-link-about" href="" id="link-about-6"></a>
    </li>
  </ul>`
}
