'use strict'

import yo from 'yo-yo'
import header from './templates/banner-header'
import breadcrumb from './templates/breadcrumbs'
import picture from './templates/picture'
import footer from './templates/banner-footer'
import data from '../data'
import { main } from '../components/main'

export default () => {
  let el = yo`
  <section class="about services services-item careers" id="careers">
    <header class="banner">${header.template}</header>
    <nav class="breadcrumb-header">${breadcrumb.template}</nav>
    <section class="about-content row no-gutters justify-content-center">
      <article class="about-description row no-gutters justify-content-center">
        <div class="opportunities-title hidden-sm-down col-11">
          <h2 class="content-title">Careers</h2>
        </div>
        <p class="about-parrafo col-11">
          Headquartered in Luxembourg, our state-of-art facilities and statistical
          modeling systems incorporate knowledge gained from 30+ years of investment
          experience. While the market for alternative assets is based on a finite
          set of criteria, investors have long demanded a learner, more efficient
          alternative investment opportunities.
        </p>
        <p class="about-parrafo col-11">
          If you are interested in a career opportunity with Carlisle, please email
          your resume to <a href="mailto:info@cmclux.com">info@cmclux.com</a>
        </p>
        <div class="opportunities-title col-11 hidden-md-up">
          ${picture.mobile}
        </div>
        <div class="opportunities-title col-11 hidden-sm-down">
          ${picture.desktop}
        </div>
      </article>
      <article class="row no-gutters justify-content-around services-item-picture">
        <div class="opportunities-title col-11 hidden-md-up">
          <h2 class="content-title">Careers</h2>
        </div>
        <picture class="col-11">
          <img class="d-block img-fluid" src="${data.pictures.careers.principal}" alt="" id="about-why-img">
        </picture>
      </article>
    </section>
    <footer class="home-footer hidden-sm-down">${footer.template}</footer>
  </section>
  `

  main.appendChild(el)
}
