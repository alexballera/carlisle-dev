'use strict'

import yo from 'yo-yo'
import data from '../../../data'

module.exports = {
  mobile: yo`
    <picture class="content-picture about-why-picture row no-gutters justify-content-center" id="about-why">
      <img class="d-block img-fluid" src="${data.pictures.careers.background}" alt="" id="about-why-img">
      <div class="row align-items-center no-gutters about-why-picture-container">
        <h2 class="content-picture-title col-12">
            Get In Touch
        </h2>
        <p class="content-picture-parrafo col-12">
            When you need an investment solution for your next business opportunity or challenge,
            please get in touch.
        </p>
        <div class="col-12">
          <div class="row no-gutters align-items-center justify-content-start about-why-picture-contacto">
            <div class="banner-work-image col-6">
                <img src='${data.pictures.careers.avatar}' alt="" class="rounded-circle">
            </div>
            <a href="#" class="content-picture-boton col-4">Get in touch</a>
          </div>
        </div>
      </div>
      <div class="about-why-picture-bgtransparent"></div>
    </picture>`,
  desktop: yo`
    <div class="row align-items-center no-gutters">
      <div class="col-8">
        <div class="row no-gutters">
          <p class="content-picture-parrafo col-12">
            When you need an investment solution for your next business opportunity or challenge,
            <strong>please get in touch.</strong>
          </p>
          <a href="#" class="content-picture-boton col-8">Get in touch</a>
          <span class="col-4 about-why-picture-icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
        </div>
      </div>
      <div class="banner-work-image col-4">
        <img src='${data.pictures.careers.avatar}' alt="" class="rounded-circle">
      </div>
    </div>`
}
