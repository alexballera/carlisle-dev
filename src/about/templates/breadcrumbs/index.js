'use strict'

import yo from 'yo-yo'
import showHome from '../../../navigation/showHome'

module.exports = {
  template: yo`
  <ol class="breadcrumb row no-gutters justify-content-start" id="breadcrumb-about">
    <li class="breadcrumb-item breadcrumb-item-about offset-2">
      <a href="#" class="breadcrumb-link breadcrumb-link-about" onclick=${showHome}>Home</a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-about active">About Us</li>
  </ol>`
}
