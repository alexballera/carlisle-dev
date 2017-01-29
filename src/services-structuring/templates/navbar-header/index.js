'use strict'

import yo from 'yo-yo'
import showServicesStructuring from '../../../navigation/showServicesStructuring'

module.exports = {
  template: yo`
  <div class="offset-2 col-10">
    <ul class="nav row no-gutters justify-content-start" id="navbar-header-services">
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showServicesStructuring}>Structuring</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showServicesStructuring}>Found Management</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showServicesStructuring}>Consulting Services</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showServicesStructuring}>Institutional Services</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showServicesStructuring}>Administrative Services</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link nav-link-about" href="" onclick=${showServicesStructuring}>Asset Acquisition Services</a>
      </li>
    </ul>
  </div>`
}
