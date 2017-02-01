'use strict'

import yo from 'yo-yo'
import showAbout from '../../../navigation/showAbout'
import showHome from '../../../navigation/showHome'

module.exports = {
  template: yo`
  <ol class="breadcrumb row no-gutters justify-content-start" id="breadcrumb-difference">
    <li class="breadcrumb-item breadcrumb-item-difference offset-2">
      <a href="#" class="breadcrumb-link breadcrumb-link-difference" onclick=${showHome}>Home</a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-difference">
      <a href="#" class="breadcrumb-link breadcrumb-link-difference" onclick=${showAbout}>About Us</a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-difference active">Our Difference</li>
  </ol>`
}
