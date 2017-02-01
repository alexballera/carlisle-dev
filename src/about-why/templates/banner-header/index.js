'use strict'

import yo from 'yo-yo'
import data from '../../../data'

module.exports = {
  template: yo `
  <div class="banner-container" id="banner-header-why">
      <div class="banner-header">
          <picture class="banner-picture">
              <img src="${data.pictures.banners.header.about_why}" alt="" class="banner-picture-img" id="banner-header-image-why">
              <div class="banner-picture-contenido row align-items-center no-gutters">
                  <h2 class="banner-picture-title col-12" id="banner-header-title-why">About us</h2>
                  <p class="banner-picture-parrafo col-12" id="banner-header-contenido-why">
                    Carlisle was established to provide minimally
                    correlated fund options in the alternative asset space
                  </p>
              </div>
          </picture>
      </div>
  </div>`
}
