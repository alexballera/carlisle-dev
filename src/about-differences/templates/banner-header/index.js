'use strict'

import yo from 'yo-yo'

module.exports = {
  template: yo `
  <div class="banner-container" id="banner-header-difference">
      <div class="banner-header">
          <picture class="banner-picture">
              <img src="" alt="" class="banner-picture-img" id="banner-header-image-difference">
              <div class="banner-picture-contenido row align-items-center no-gutters">
                  <h2 class="banner-picture-title col-12" id="banner-header-title-difference"></h2>
                  <p class="banner-picture-parrafo col-12" id="banner-header-contenido-difference"></p>
                  <a href="#" class="banner-picture-boton col-4" id="banner-header-boton-difference">Learn More</a>
              </div>
          </picture>
      </div>
  </div>`
}
