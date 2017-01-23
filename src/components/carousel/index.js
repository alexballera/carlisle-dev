'user strict'

import yo from 'yo-yo'

module.exports = {
  template: yo`
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active content-opportunities row no-gutters">
        <picture class="content-picture content-picture-left col-6">
            <img class="d-block img-fluid" src="http://lorempixel.com/400/400/city/" alt="" class="content-picture-img">
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
        </picture>
        <picture class="content-picture content-picture-rigth col-6">
          <img class="d-block img-fluid" src="http://lorempixel.com/400/400/sports/" alt="" class="content-picture-img">
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
        </picture>
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

/*
<div class="carousel-item">
  <img class="d-block img-fluid" src="http://lorempixel.com/400/400/sports/" alt="Second slide">
  <img class="d-block img-fluid" src="http://lorempixel.com/400/400/food/" alt="Second slide">
</div>
<div class="carousel-item">
  <img class="d-block img-fluid" src="http://lorempixel.com/400/400/people/" alt="Second slide">
  <img class="d-block img-fluid" src="http://lorempixel.com/400/400/city/" alt="Second slide">
</div>
*/
