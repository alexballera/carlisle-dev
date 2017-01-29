'use strict'

import yo from 'yo-yo'
import showHome from '../../../navigation/showHome'

module.exports = {
  template: yo`
  <ol class="breadcrumb row no-gutters justify-content-start" id="breadcrumb-carrers">
    <li class="breadcrumb-item breadcrumb-item-team offset-2">
      <a href="#" class="breadcrumb-link breadcrumb-link-team" onclick=${showHome}>Home</a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-team active">
      Carrers
    </li>  
  </ol>`
}
