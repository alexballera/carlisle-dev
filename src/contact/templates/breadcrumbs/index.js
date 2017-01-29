'use strict'

import yo from 'yo-yo'
import showHome from '../../../navigation/showHome'

module.exports = {
  template: yo`
  <ol class="breadcrumb row no-gutters justify-content-start" id="breadcrumb-contact">
    <li class="breadcrumb-item breadcrumb-item-team offset-2">
      <a href="#" class="breadcrumb-link breadcrumb-link-team" id="team-why" onclick=${showHome}>Home</a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-team active">
      Contact
    </li>
  </ol>`
}
