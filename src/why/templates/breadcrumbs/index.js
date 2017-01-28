'use strict'

import yo from 'yo-yo'
import showAbout from '../../../navigation/showAbout'
import showHome from '../../../navigation/showHome'

module.exports = {
  template: yo`
  <ol class="breadcrumb col-10 offset-2" id="breadcrumb-why">
    <li class="breadcrumb-item breadcrumb-item-why">
      <a href="#" class="breadcrumb-link breadcrumb-link-why" id="breadcrumb-link-7" onclick=${showHome}></a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-why">
      <a href="#" class="breadcrumb-link breadcrumb-link-why" id="breadcrumb-link-8" onclick=${showAbout}></a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-why"><a href="#" class="breadcrumb-link breadcrumb-link-why" id="breadcrumb-link-9"></a></li>
    <li class="breadcrumb-item breadcrumb-item-why"><a href="#" class="breadcrumb-link breadcrumb-link-why" id="breadcrumb-link-10"></a></li>
    <li class="breadcrumb-item breadcrumb-item-why"><a href="#" class="breadcrumb-link breadcrumb-link-why" id="breadcrumb-link-11"></a></li>
    <li class="breadcrumb-item breadcrumb-item-why"><a href="#" class="breadcrumb-link breadcrumb-link-why" id="breadcrumb-link-12"></a></li>
  </ol>`
}
