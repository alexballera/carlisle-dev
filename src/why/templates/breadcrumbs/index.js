'use strict'

import yo from 'yo-yo'
import showAbout from '../../../navigation/showAbout'
import showHome from '../../../navigation/showHome'

module.exports = {
  template: yo`
  <ol class="breadcrumb row no-gutters justify-content-start" id="breadcrumb-why">
    <li class="breadcrumb-item breadcrumb-item-why offset-2">
      <a href="#" class="breadcrumb-link breadcrumb-link-why" onclick=${showHome}></a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-why">
      <a href="#" class="breadcrumb-link breadcrumb-link-why" onclick=${showAbout}></a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-why">
      <a href="#" class="breadcrumb-link breadcrumb-link-why"></a>
    </li>
  </ol>`
}
