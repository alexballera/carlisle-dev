'use strict'
import yo from 'yo-yo'

module.exports = {
  template: yo`
  <div class="content-work">
    <div class="row no-gutters banner-work-bgimage">
      <img src="" alt="" id="banner-work-bgimage">
    </div>
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
          <span class="name" id="nameBanner">Nombre</span>
          <span class="cargo" id="cargoBanner">Cargo</span>
      </p>
      <div class="banner-work-image col-2">
          <img src='' alt="" id="avatarBanner" class="rounded-circle">
      </div>
    </div>
</div>`
}
