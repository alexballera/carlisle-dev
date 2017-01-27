'use strict'

import yo from 'yo-yo'
import data from '../../../data'

module.exports = {
  template: yo`
    <picture class="content-picture about-why-picture row no-gutters justify-content-center" id="about-why">
    <img class="d-block img-fluid" src="${data.staff.lucy.avatar}" alt="" id="about-why-img">
    <div class="row align-items-center no-gutters about-why-picture-container">
      <h2 class="content-picture-title col-6">
          Get In Touch
      </h2>
      <p class="content-picture-parrafo col-12">
          When you need an investment solution for your next business opportunity or challenge,
          please get in touch.
      </p>
      <div class="col-8">
        <div class="row no-gutters justify-content-start about-why-picture-contacto">
          <a href="#" class="content-picture-boton col-6">Call Us</a>
          <span class="col-4 about-why-picture-icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
        </div>
      </div>
    </div>
    <div class="about-why-picture-bgtransparent"></div>
  </picture>`
}

/* why2: yo`
  <picture class="content-picture">
      <img class="d-block img-fluid" src="" alt="">
      <div class="content-picture-contenido row align-items-center no-gutters">
      <h2 class="content-picture-title col-12">
          Why Carlisle?
      </h2>
      <p class="content-picture-parrafo col-12">
          Our experience gives us the insight and patience to identify opportunities with consistence absolute returns.
      </p>
      <a href="#" class="content-picture-boton col-8">
          Get in touch
      </a>
      </div>
  </picture>`,
  difference2: yo`
  <picture class="content-picture">
    <img class="d-block img-fluid" src="" alt="">
    <div class="content-picture-contenido row align-items-center no-gutters">
    <h2 class="content-picture-title col-12">
        Our difference
    </h2>
    <p class="content-picture-parrafo col-12">
        Carlisle is a financial structuring and consulting firm specializing in alternative asset classes.
    </p>
    <a href="#" class="content-picture-boton col-8">
        Get in touch
    </a>
    </div>
  </picture>`,
  community2: yo`
  <picture class="content-picture">
    <img class="d-block img-fluid" src="" alt="">
    <div class="content-picture-contenido row align-items-center no-gutters">
    <h2 class="content-picture-title col-12">
        Community Reach
    </h2>
    <p class="content-picture-parrafo col-12">
        Street Soccer USA (SSUSA) is a 501(c)(3) non-profit organization
        that uses sports to help adults and youths (ages 15+) get out of
        homelessness. By creating a team
    </p>
    <a href="#" class="content-picture-boton col-8">
        Get in touch
    </a>
    </div>
  </picture>`,
  why3: yo`
  <picture class="content-picture">
      <img class="d-block img-fluid" src="" alt="">
      <div class="content-picture-contenido row align-items-center no-gutters">
      <h2 class="content-picture-title col-12">
          Why Carlisle?
      </h2>
      <p class="content-picture-parrafo col-12">
          Our experience gives us the insight and patience to identify opportunities with consistence absolute returns.
      </p>
      <a href="#" class="content-picture-boton col-8">
          Get in touch
      </a>
      </div>
  </picture>`,
  difference3: yo`
  <picture class="content-picture">
    <img class="d-block img-fluid" src="" alt="">
    <div class="content-picture-contenido row align-items-center no-gutters">
    <h2 class="content-picture-title col-12">
        Our difference
    </h2>
    <p class="content-picture-parrafo col-12">
        Carlisle is a financial structuring and consulting firm specializing in alternative asset classes.
    </p>
    <a href="#" class="content-picture-boton col-8">
        Get in touch
    </a>
    </div>
  </picture>`,
  community3: yo`
  <picture class="content-picture">
    <img class="d-block img-fluid" src="" alt="">
    <div class="content-picture-contenido row align-items-center no-gutters">
    <h2 class="content-picture-title col-12">
        Community Reach
    </h2>
    <p class="content-picture-parrafo col-12">
        Street Soccer USA (SSUSA) is a 501(c)(3) non-profit organization
        that uses sports to help adults and youths (ages 15+) get out of
        homelessness. By creating a team
    </p>
    <a href="#" class="content-picture-boton col-8">
        Get in touch
    </a>
    </div>
  </picture>`
  */
