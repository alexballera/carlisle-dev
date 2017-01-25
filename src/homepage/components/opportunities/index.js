'use strict'

import yo from 'yo-yo'
import banner from '../../../components/banner-staff'
import carousel from '../../../components/carousel'
import picture from '../../../components/picture-about'

module.exports = {
  template: yo `
  <div class="opportunities-container">
    <div class="opportunities-title col-12 col-md-8 col-lg-7 col-xl-6">
        <h2 class="content-title">Investment opportunities</h2>
    </div>
    <div class="opportunities-carousel hidden-sm-down">
      ${carousel.template}
    </div>
    <div id="opportunities-carousel" class="opportunities-carousel opportunities-carousel-mobile hidden-md-up row no-gutters justify-content-center">
      ${picture.home.why}
      ${picture.home.difference}
      ${picture.home.community}
    </div>
    <div class="opportunities-banner">
      ${banner.template}
    </div>
  </div>`
}
