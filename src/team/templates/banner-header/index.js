'use strict'

import yo from 'yo-yo'
import data from '../../../data'

module.exports = {
  template: yo `
  <div class="banner-container">
      <div class="banner-header hidden-xs-down">
          <picture class="banner-picture">
              <img src="${data.pictures.banners.header.team}" alt="" class="banner-picture-img">
              <div class="banner-picture-contenido row align-items-center no-gutters">
                  <h2 class="banner-picture-title col-12">
                  Team
                  </h2>
                  <p class="banner-picture-parrafo col-12">
                    We represent the leading talent in alternative investing. <br>
                    Over 30 years of combined experience has provided us with a strong network
                    of global contacts, and has allowed us to build on our unrivaled expertise
                    in capital markets.
                  </p>
                  <a href="#" class="banner-picture-boton col-4">Learn More</a>
              </div>
          </picture>
      </div>
  </div>`
}
