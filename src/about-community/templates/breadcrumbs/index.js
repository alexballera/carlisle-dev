'use strict'

import yo from 'yo-yo'
import showAbout from '../../../navigation/showAbout'
import showHome from '../../../navigation/showHome'

module.exports = {
  template: yo`
  <ol class="breadcrumb col-10 offset-2" id="breadcrumb-community">
    <li class="breadcrumb-item breadcrumb-item-community">
      <a href="#" class="breadcrumb-link breadcrumb-link-community" onclick=${showHome}>Home</a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-community">
      <a href="#" class="breadcrumb-link breadcrumb-link-community" onclick=${showAbout}>About Us</a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-community active">Community reach </li>
  </ol>`
}
