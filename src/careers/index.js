'use strict'

import yo from 'yo-yo'
import header from './templates/banner-header'
import breadcrumb from './templates/breadcrumbs'
import banner from './templates/carousel-staff'
import footer from './templates/banner-footer'
import data from '../data'
import { main } from '../components/main'

export default () => {
  let el = yo`
  <section class="about services services-item" id="careers">
    <header class="banner">${header.template}</header>
    <nav class="breadcrumb-header">${breadcrumb.template}</nav>
    <section class="about-content row no-gutters justify-content-center">
      <article class="about-description row no-gutters justify-content-center">
        <div class="opportunities-title hidden-sm-down col-11">
          <h2 class="content-title">Careers</h2>
        </div>
        <p class="about-parrafo col-11">
          Our services are developed by an experienced team of skilled professionals who brings insight
          from multiple industries. We conduct fundamental research and quantitative analysis to develop
          ideas that we make actionable through our proprietary modeling. 
        </p>
        <p class="about-parrafo col-11">
          And we execute our ideas with the systemic assurance that comes from dedicated risk and liquidity
          management and proven technology and information infrastructure. 
        </p>
      </article>
      <article class="row no-gutters justify-content-around services-item-picture">
        <div class="opportunities-title col-11 hidden-md-up">
          <h2 class="content-title">Careers</h2>
        </div>
        <picture class="col-11">
          <img class="d-block img-fluid" src="${data.pictures.services.structuring}" alt="" id="about-why-img">
        </picture>
      </article>
    </section>
    <footer class="home-footer hidden-md-up">${footer.template}</footer>
    <footer class="opportunities-banner hidden-sm-down">${banner.template}</footer>
  </section>
  `

  main.appendChild(el)
}
