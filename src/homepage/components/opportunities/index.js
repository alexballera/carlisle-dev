'use strict'

import yo from 'yo-yo'
import banner from '../../../components/banner-staff'
import carousel from '../../../components/carousel'

module.exports = {
  template: yo `
  <div class="opportunities-container">
    <div class="opportunities-title col-12 col-md-8 col-lg-7 col-xl-6">
        <h2 class="content-title">Investment opportunities</h2>
    </div>
    <div class="opportunities-carousel">
      ${carousel.template}
    </div>
    <div class="opportunities-banner">
      ${banner.template}
    </div>
  </div>`
}
