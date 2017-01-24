'user strict'

import yo from 'yo-yo'
import picture from '../picture-about'

module.exports = {
  template: yo`
  <div id="carouselAbout" class="carousel carouselAbout carousel-opportunities slide" data-ride="carouselAbout" data-interval="7000">
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active content-opportunities row no-gutters justify-content-center">
        ${picture.why}
        ${picture.difference}
      </div>
      <div class="carousel-item content-opportunities row no-gutters justify-content-center">
        ${picture.difference2}
        ${picture.community2}
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselAbout" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselAbout" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`
}
