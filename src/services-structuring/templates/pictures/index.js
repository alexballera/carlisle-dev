'use strict'

import yo from 'yo-yo'
import data from '../../../data/'
import showWhy from '../../../navigation/showWhy'

module.exports = {
  structuring: yo`
    <picture class="content-picture about-why-picture col-10 col-sm-9 col-md-5 col-xl-3">
      <img class="d-block img-fluid" src="${data.pictures.services.structuring}" alt="" id="about-why-img">
      <div class="content-picture-contenido row align-items-center no-gutters">
        <h2 class="content-picture-title col-12">
            Structuring
        </h2>
        <p class="content-picture-parrafo col-12">
            Every alternative asset lends itself to a different
            investment vehicle and enviroment. Carlisle can assist
            you in finding the right solution for your needs as well 
            as to structure said.
        </p>
        <a href="#" class="content-picture-boton col-8" onclick=${showWhy}>
            Learn more
        </a>
      </div>
     <div class="about-why-background"></div>
    </picture>`
}
