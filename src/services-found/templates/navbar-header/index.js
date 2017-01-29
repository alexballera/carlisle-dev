'use strict'

import yo from 'yo-yo'
import showServicesStructuring from '../../../navigation/showServicesStructuring'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  template: yo`
  <div class="offset-2 col-10">
    <ul class="nav row no-gutters justify-content-start" id="navbar-header-services">
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showServicesStructuring}>Structuring</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showDifference}>Found Management</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showCommunity}>Consulting Services</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showCommunity}>Institutional Services</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showCommunity}>Administrative Services</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showCommunity}>Asset Acquisition Services</a>
      </li>
    </ul>
  </div>`
}
