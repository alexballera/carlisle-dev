'user strict'

import yo from 'yo-yo'
import picture from '../picture-about'

module.exports = {
  template: yo`
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active content-opportunities row no-gutters justify-content-center">
        ${picture.why}
        ${picture.difference}
      </div>
      <div class="carousel-item content-opportunities row no-gutters justify-content-center">
        ${picture.community}
        ${picture.why2}
      </div>
      <div class="carousel-item content-opportunities row no-gutters justify-content-center">
        ${picture.difference2}
        ${picture.community2}
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`
}
