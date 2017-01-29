'use strict'

import yo from 'yo-yo'
import data from '../../../data'

module.exports = {
  template: yo `
  <div class="banner-container">
      <div class="banner-header">
          <picture class="banner-picture">
              <img src="${data.pictures.banners.header.contact}" alt="" class="banner-picture-img">
              <div class="banner-picture-contenido row align-items-center no-gutters">
                  <h2 class="banner-picture-title col-12">
                  Contact
                  </h2>
                  <p class="banner-picture-parrafo col-12">
                    Carlisle was established to provide minimally correlated fund
                    options in the alternative asset space.
                  </p>
                  <a href="#" class="banner-picture-boton col-4">Learn More</a>
              </div>
          </picture>
      </div>
  </div>`
}
