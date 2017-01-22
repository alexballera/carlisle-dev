'use strict'

import yo from 'yo-yo'
import banner from '../../../components/banner-staff'

module.exports = {
  template: yo `
  <div class="opportunities-container">
      <div class="col-12 col-md-8 col-lg-7 col-xl-6">
      <h2 class="content-title">
          Investment opportunities
      </h2>
    </div>
      <div class="row no-gutters justify-content-center">
          <div class="col-12 col-md-6 col-xl-5 content-opportunities">
          <picture class="content-picture">
              <img src="http://lorempixel.com/1200/400/city/" alt="" class="content-picture-img">
              <div class="content-picture-contenido row align-items-center no-gutters">
              <h2 class="content-picture-title col-12">
                  Why Carlisle?
              </h2>
              <p class="content-picture-parrafo col-12">
                  Our experience gives us the insight and patience to identify opportunities with consistence absolute returns.
              </p>
              <a href="#" class="content-picture-boton col-6">
                  Get in touch
              </a>
              </div>
          </picture>
          </div>
          <div class="col-12 col-md-6 col-xl-5 content-opportunities">
          <picture class="content-picture">
              <img src="http://lorempixel.com/1200/400/business/" alt="" class="content-picture-img">
              <div class="content-picture-contenido row align-items-center no-gutters">
              <h2 class="content-picture-title col-12">
                  Our difference
              </h2>
              <p class="content-picture-parrafo col-12">
                  Carlisle is a financial structuring and consulting firm specializing in alternative asset classes.
              </p>
              <a href="#" class="content-picture-boton col-6">
                  Get in touch
              </a>
              </div>
          </picture>
          </div>
      </div>
      ${banner.template}
  </div>`
}
