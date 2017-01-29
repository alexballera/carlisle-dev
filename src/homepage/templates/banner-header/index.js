'use strict'

import yo from 'yo-yo'

module.exports = {
  home: yo `
  <div class="banner-container">
      <div class="banner-header">
          <picture class="banner-picture">
              <img src="" alt="" class="banner-picture-img" id="banner-header-image-home">
              <div class="banner-picture-contenido row align-items-center no-gutters">
                  <h2 class="banner-picture-title col-12" id="banner-header-title-home"></h2>
                  <p class="banner-picture-parrafo col-12" id="banner-header-contenido-home"></p>
                  <a href="#" class="banner-picture-boton col-4" id="banner-header-boton">Learn More</a>
              </div>
          </picture>
      </div>
      <div class="banner-bg-bottom hidden-xs-down" id="banner-header-bg-bottom"></div>
  </div>`
}
