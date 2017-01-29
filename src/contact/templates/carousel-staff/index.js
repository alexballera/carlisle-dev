'use strict'
import yo from 'yo-yo'
import data from '../../../data'

module.exports = {
  template: yo`
    <div id="carouselStaffContact" class="carousel slide carouselStaff" data-ride="carouselStaffContact" data-interval="6000">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <picture class="carousel-picture">
            <img class="d-block img-fluid" src="${data.pictures.banners.slide.slide1}" alt="First slide">
            <div class="row no-gutters align-items-center justify-content-center banner-work">
                <p class="banner-work-parrafo offset-1 col-10 offset-xl-0 col-xl-7">
                    <i class="fa fa-quote-left fa-2x" aria-hidden="true"></i>
                    <span>
                    Carlisle was established to provide
                    minimally correlated found options
                    in the alternative asset space.
                    </span>
                    <i class="fa fa-quote-right fa-2x" aria-hidden="true"></i>
                </p>
                <p class="banner-work-name offset-2 col-6 offset-sm-3 col-sm-5 offset-md-4 col-md-4 offset-lg-5 col-lg-3">
                    <span class="name" id="nameBanner">${data.staff.lucy.nombre}</span>
                    <span class="cargo" id="cargoBanner">${data.staff.lucy.cargo}</span>
                </p>
                <div class="banner-work-image col-2">
                    <img src='${data.staff.lucy.avatar}' alt="" id="avatarBanner" class="rounded-circle">
                </div>
            </div>
            <div class="col-12 carousel-item-background"></div> 
          </picture>      
        </div>
        <div class="carousel-item">
          <picture class="carousel-picture">
            <img class="d-block img-fluid" src="${data.pictures.banners.slide.slide2}" alt="Second slide">
            <div class="row no-gutters align-items-center justify-content-center banner-work">
                <p class="banner-work-parrafo offset-1 col-10 offset-xl-0 col-xl-7">
                    <i class="fa fa-quote-left fa-2x" aria-hidden="true"></i>
                    <span>
                    Carlisle was established to provide
                    minimally correlated found options
                    in the alternative asset space.
                    </span>
                    <i class="fa fa-quote-right fa-2x" aria-hidden="true"></i>
                </p>
                <p class="banner-work-name offset-2 col-6 offset-sm-3 col-sm-5 offset-md-4 col-md-4 offset-lg-5 col-lg-3">
                    <span class="name" id="nameBanner">${data.staff.brandom.nombre}</span>
                    <span class="cargo" id="cargoBanner">${data.staff.brandom.cargo}</span>
                </p>
                <div class="banner-work-image col-2">
                    <img src='${data.staff.brandom.avatar}' alt="" id="avatarBanner" class="rounded-circle">
                </div>
            </div>
            <div class="col-12 carousel-item-background"></div>
          </picture>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselStaffContact" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselStaffContact" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>`
}
