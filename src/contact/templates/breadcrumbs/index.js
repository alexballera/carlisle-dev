'use strict'

import yo from 'yo-yo'
import showHome from '../../../navigation/showHome'

module.exports = {
  template: yo`
  <ol class="breadcrumb col-10 offset-2" id="breadcrumb-contact">
    <li class="breadcrumb-item breadcrumb-item-team">
      <a href="#" class="breadcrumb-link breadcrumb-link-team" id="team-why" onclick=${showHome}>Home</a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-team">
      <a href="#" class="breadcrumb-link breadcrumb-link-team">Contact</a>
    </li>  
  </ol>`
}
