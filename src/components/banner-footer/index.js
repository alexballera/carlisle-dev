'use strict'

import yo from 'yo-yo'
import data from '../../data'

module.exports = {
  template: yo `
  <div class="row no-gutters home-footer-container">
      <picture class="col-12 home-footer-banner">
          <div class="home-footer-opacity"></div>
          <img src="${data.pictures.banners.footer}" alt="">
          <div class="home-footer-contenido row no-gutters justify-content-center align-items-center">
              <h3 class="col-10 col-md-9 col-xl-11 home-footer-title">
                  Carlisle is a leading, highly diversified
                  global investment management firm
              </h3>
              <p class="col-10 col-md-9 col-xl-11 home-footer-content">
                  Carlisle applies its deep experience and specialized expertise
                  across a range of investment strategies -private equity,
                  credit, liquid markets and traditional fixed income - 
                  on behalf of investors and private clients wordwide.
              </p>
          </div>
      </picture>
  </div>`
}
