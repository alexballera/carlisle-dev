'use strict'

import yo from 'yo-yo'
import data from '../../../data'
import showWhy from '../../../navigation/showWhy'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  why: yo`
      <picture class="content-picture col-10" id="home-why">
          <img class="d-block img-fluid" src="${data.pictures.home.about.why}" alt="" id="home-why-img">
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
          <div class="home-why-background"></div>
      </picture>`,
  difference: yo`
      <picture class="content-picture col-10" id="home-difference">
          <img class="d-block img-fluid" src="${data.pictures.home.about.difference}" alt="" id="home-difference-img">
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
          <div class="home-why-background"></div>
      </picture>`,
  community: yo`
      <picture class="content-picture col-10" id="home-community">
          <img class="d-block img-fluid" src="${data.pictures.home.about.community}" alt="" id="home-community-img">
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
          <div class="home-why-background"></div>
      </picture>`,
  slide1_why: yo`
      <picture class="content-picture col-6 col-md-5 col-xl-5">
          <img class="d-block img-fluid" src="${data.pictures.home.slide.why}" alt="" id="home-why2">
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
          <div class="home-why-background"></div>
      </picture>`,
  slide1_difference: yo`
      <picture class="content-picture col-6 col-md-5 col-xl-5">
          <img class="d-block img-fluid" src="${data.pictures.home.slide.difference}" alt="" id="home-difference-img">
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
          <div class="home-why-background"></div>
      </picture>`,
  slide2_difference: yo`
      <picture class="content-picture col-6 col-md-5 col-xl-5">
          <img class="d-block img-fluid" src="${data.pictures.home.slide.difference}" alt="" id="home-difference-img">
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
          <div class="home-why-background"></div>
      </picture>`,
  slide2_community: yo`
      <picture class="content-picture col-6 col-md-5 col-xl-5">
          <img class="d-block img-fluid" src="${data.pictures.home.slide.community}" alt="" id="home-community-img">
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
          <div class="home-why-background"></div>
      </picture>`
}
