'use strict'

import yo from 'yo-yo'
import data from '../../../data'

module.exports = {
  template: yo`
    <picture class="content-picture about-why-picture row no-gutters justify-content-center" id="about-difference">
    <img class="d-block img-fluid" src="${data.staff.lucy.avatar}" alt="" id="about-difference-img">
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
