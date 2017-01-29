'use strict'

import yo from 'yo-yo'
import showWhy from '../../../navigation/showWhy'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  why: yo`
      <picture class="content-picture" id="home-why">
          <img class="d-block img-fluid" src="" alt="" id="home-why-img">
          <div class="content-picture-contenido row align-items-center no-gutters">
          <h2 class="content-picture-title col-12">
              Why Carlisle?
          </h2>
          <p class="content-picture-parrafo col-12">
              Our experience gives us the insight and patience to identify opportunities with consistence absolute returns.
          </p>
          <a href="#" class="content-picture-boton col-8" onclick=${showWhy}>
              Get in touch
          </a>
          </div>
      </picture>`,
  why2: yo`
      <picture class="content-picture col-md-5">
          <img class="d-block img-fluid" src="" alt="" id="home-why2">
          <div class="content-picture-contenido row align-items-center no-gutters">
          <h2 class="content-picture-title col-12">
              Why Carlisle?
          </h2>
          <p class="content-picture-parrafo col-12">
              Our experience gives us the insight and patience to identify opportunities with consistence absolute returns.
          </p>
          <a href="#" class="content-picture-boton col-8" onclick=${showWhy}>
              Get in touch
          </a>
          </div>
      </picture>`,
  difference: yo`
      <picture class="content-picture" id="home-difference">
          <img class="d-block img-fluid" src="" alt="" id="home-difference-img">
          <div class="content-picture-contenido row align-items-center no-gutters">
          <h2 class="content-picture-title col-12">
              Our difference
          </h2>
          <p class="content-picture-parrafo col-12">
              Carlisle is a financial structuring and consulting firm specializing in alternative asset classes.
          </p>
          <a href="#" class="content-picture-boton col-8" onclick=${showDifference}>
              Get in touch
          </a>
          </div>
      </picture>`,
  difference2: yo`
      <picture class="content-picture col-md-5">
          <img class="d-block img-fluid" src="" alt="" id="home-difference-img">
          <div class="content-picture-contenido row align-items-center no-gutters">
          <h2 class="content-picture-title col-12">
              Our difference
          </h2>
          <p class="content-picture-parrafo col-12">
              Carlisle is a financial structuring and consulting firm specializing in alternative asset classes.
          </p>
          <a href="#" class="content-picture-boton col-8" onclick=${showDifference}>
              Get in touch
          </a>
          </div>
      </picture>`,
  difference3: yo`
      <picture class="content-picture col-md-5">
          <img class="d-block img-fluid" src="" alt="" id="home-difference-img">
          <div class="content-picture-contenido row align-items-center no-gutters">
          <h2 class="content-picture-title col-12">
              Our difference
          </h2>
          <p class="content-picture-parrafo col-12">
              Carlisle is a financial structuring and consulting firm specializing in alternative asset classes.
          </p>
          <a href="#" class="content-picture-boton col-8" onclick=${showDifference}>
              Get in touch
          </a>
          </div>
      </picture>`,
  community: yo`
      <picture class="content-picture" id="home-community">
          <img class="d-block img-fluid" src="" alt="" id="home-community-img">
          <div class="content-picture-contenido row align-items-center no-gutters">
          <h2 class="content-picture-title col-12">
              Community Reach
          </h2>
          <p class="content-picture-parrafo col-12">
              Street Soccer USA (SSUSA) is a 501(c)(3) non-profit organization
              that uses sports to help adults and youths (ages 15+) get out of
              homelessness. By creating a team
          </p>
          <a href="#" class="content-picture-boton col-8" onclick=${showCommunity}>
              Get in touch
          </a>
          </div>
      </picture>`,
  community2: yo`
      <picture class="content-picture col-md-5">
          <img class="d-block img-fluid" src="" alt="" id="home-community-img">
          <div class="content-picture-contenido row align-items-center no-gutters">
          <h2 class="content-picture-title col-12">
              Community Reach
          </h2>
          <p class="content-picture-parrafo col-12">
              Street Soccer USA (SSUSA) is a 501(c)(3) non-profit organization
              that uses sports to help adults and youths (ages 15+) get out of
              homelessness. By creating a team
          </p>
          <a href="#" class="content-picture-boton col-8" onclick=${showCommunity}>
              Get in touch
          </a>
          </div>
      </picture>`
}
