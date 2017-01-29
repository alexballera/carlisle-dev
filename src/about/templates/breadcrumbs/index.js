'use strict'

import yo from 'yo-yo'
import showAbout from '../../../navigation/showAbout'
import showHome from '../../../navigation/showHome'

module.exports = {
  template: yo`
  <ol class="breadcrumb col-10 offset-2" id="breadcrumb-about">
    <li class="breadcrumb-item breadcrumb-item-about">
      <a href="#" class="breadcrumb-link breadcrumb-link-about" onclick=${showHome}></a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-about">
      <a href="#" class="breadcrumb-link breadcrumb-link-about" onclick=${showAbout}></a>
    </li>
  </ol>`
}
