'use strict'

import yo from 'yo-yo'
import data from '../../../data'
import showWhy from '../../../navigation/showWhy'
import showDifference from '../../../navigation/showOurDifference'
import showCommunity from '../../../navigation/showCommunity'

module.exports = {
  why: yo`
      <picture class="content-picture about-why-picture col-12 col-md-6 col-xl-3" id="about-why">
          <img class="d-block img-fluid" src="${data.pictures.about.why}" alt="" id="about-why-img">
          <div class="content-picture-contenido">
          <h2 class="content-picture-title col-12">
              Why Carlisle?
          </h2>
          <p class="content-picture-parrafo col-12">
              Our experience gives us the insight and patience to identify opportunities with consistence absolute returns.
          </p>
          <a href="#" class="content-picture-boton col-8" onclick=${showWhy}>
              Read more
          </a>
          </div>
          <div class="about-why-background"></div>
      </picture>`,
  difference: yo`
      <picture class="content-picture about-why-picture col-12 col-md-6 col-xl-3" id="about-difference">
          <img class="d-block img-fluid" src="${data.pictures.about.difference}" alt="" id="about-difference-img">
          <div class="content-picture-contenido">
          <h2 class="content-picture-title col-12">
              Our difference
          </h2>
          <p class="content-picture-parrafo col-12">
              Carlisle is a financial structuring and consulting firm specializing in alternative asset classes.
          </p>
          <a href="#" class="content-picture-boton col-8" onclick=${showDifference}>
              Read more
          </a>
          </div>
          <div class="about-why-background"></div>
      </picture>`,
  community: yo`
      <picture class="content-picture about-why-picture col-12 col-md-6 col-xl-3" id="about-community">
          <img class="d-block img-fluid" src="${data.pictures.about.community}" alt="" id="about-community-img">
          <div class="content-picture-contenido">
          <h2 class="content-picture-title col-12">
              Community Reach
          </h2>
          <p class="content-picture-parrafo col-12">
              Street Soccer USA (SSUSA) is a 501(c)(3) non-profit organization
              that uses sports to help adults and youths (ages 15+) get out of
              homelessness. By creating a team
          </p>
          <a href="#" class="content-picture-boton col-8" onclick=${showCommunity}>
              Read more
          </a>
          </div>
          <div class="about-why-background"></div>
      </picture>`
}
