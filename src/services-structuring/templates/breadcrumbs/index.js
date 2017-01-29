'use strict'

import yo from 'yo-yo'
import showHome from '../../../navigation/showHome'
import showServices from '../../../navigation/showServices'

module.exports = {
  template: yo`
  <ol class="breadcrumb row no-gutters justify-content-start">
    <li class="breadcrumb-item breadcrumb-item-team offset-2">
      <a href="#" class="breadcrumb-link breadcrumb-link-team" onclick=${showHome}>Home</a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-team">
      <a href="#" class="breadcrumb-link breadcrumb-link-team" onclick=${showServices}>Our Services</a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-team active">
      Structuring
    </li> 
  </ol>`
}
