'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'

var opportunities = document.getElementById('opportunities')

var el = yo `
<div class="opportunities-container">
  <div class="row no-gutters ">
      <div class="col-12 col-md-8 col-lg-7 col-xl-6">
          <h2 class="content-title">
              Investment opportunities
          </h2>
      </div>
  </div>
  <div class="row no-gutters justify-content-center">
      <div class="col-12 col-md-6 col-xl-5 content-opportunities">
          <picture class="content-picture">
              <img src="http://lorempixel.com/1200/400/city/" alt="" class="content-picture-img">
              <div class="content-picture-contenido row align-items-center no-gutters">
                  <h2 class="content-picture-title col-12">
                      Why Carlisle?
                  </h2>
                  <p class="content-picture-parrafo col-12">
                      Our experience gives us the insight and
                      patience to identify opportunities with
                      consistence absolute returns.
                  </p>
                  <a href="#" class="content-picture-boton col-6">
                      Get in touch
                  </a>
              </div>
          </picture>
      </div>
      <div class="col-12 col-md-6 col-xl-5 content-opportunities">
          <picture class="content-picture">
              <img src="http://lorempixel.com/1200/400/business/" alt="" class="content-picture-img">
              <div class="content-picture-contenido row align-items-center no-gutters">
                  <h2 class="content-picture-title col-12">
                      Our difference
                  </h2>
                  <p class="content-picture-parrafo col-12">
                      Carlisle is a financial structuring and
                      consulting firm specializing in alternative
                      asset classes.
                  </p>
                  <a href="#" class="content-picture-boton col-6">
                      Get in touch
                  </a>
              </div>
          </picture>
      </div>
  </div>
  <div class="content-work row no-gutters align-items-center justify-content-center">                              
      <p class="content-work-parrafo offset-1 col-10 offset-xl-0 col-xl-7">
          <i class="fa fa-quote-left fa-2x" aria-hidden="true"></i>
          <span>
              Carlisle was established to provide
          minimally correlated found options
          in the alternative asset space.
          </span> 
          <i class="fa fa-quote-right fa-2x" aria-hidden="true"></i>                           
      </p>                              
      <p class="content-work-name offset-2 col-6 offset-sm-3 col-sm-5 offset-md-4 col-md-4 offset-lg-5 col-lg-3">
          <span class="name">Lucy Mcnazza</span>
          <span class="cargo">Chief Developer At Company</span>
      </p>
      <div class="content-work-image col-2">
          <img src="./images/lucy-mcnazza.jpg" alt="" class="rounded-circle">
      </div>
  </div>
</div>`

export default () => {
  empty(opportunities).appendChild(el)
}
