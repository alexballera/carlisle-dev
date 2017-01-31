'use strict'

import yo from 'yo-yo'
import header from './templates/banner-header'
import breadcrumb from './templates/breadcrumbs'
import banner from './templates/carousel-staff'
import formulario from './templates/formulario'
import footer from './templates/banner-footer'
import { main } from '../components/main'

export default () => {
  let el = yo`
  <section class="about contact" id="contact">
    <header class="banner">${header.template}</header>
    <nav class="breadcrumb-header">${breadcrumb.template}</nav>
    <section class="about-content">
      <article class="about-description row no-gutters justify-content-around">
        <div class="col-11">
          <div class="row no-gutters">
            <div class="contact-form col-12" id="contact-form">
              ${formulario.template}
            </div>
            <address class="col-12 form-address">
              Carlisle Management Company <br>
              9, Rue Sainte Zithe <br>
              4th Floor <br>
              L-2763 Luxembourg <br>
              Tel: +352.268.4.53.59 <br>
              Fax: +352.268.4.53.76 <br>
            </address>
          </div>
        </div>
        <div class="contact-maps col-11">Mapa</div>
      </article>
    </section>
    <footer class="home-footer hidden-md-up">${footer.template}</footer>
    <footer class="opportunities-banner hidden-sm-down">${banner.template}</footer>
  </section>
  `

  main.appendChild(el)
}
