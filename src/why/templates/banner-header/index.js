'use strict'

import yo from 'yo-yo'

module.exports = {
  why: yo `
  <div class="banner-container" id="banner-header-why">
      <div class="banner-header hidden-xs-down">
          <picture class="banner-picture">
              <img src="" alt="" class="banner-picture-img" id="banner-header-image-why">
              <div class="banner-picture-contenido row align-items-center no-gutters">
                  <h2 class="banner-picture-title col-12" id="banner-header-title-why"></h2>
                  <p class="banner-picture-parrafo col-12" id="banner-header-contenido-why"></p>
                  <a href="#" class="banner-picture-boton col-4" id="banner-header-boton-why">Learn More</a>
              </div>
          </picture>
      </div>
      <div class="banner-bg-bottom hidden-xs-down" id="banner-header-bg-bottom-why"></div>
  </div>`
}
