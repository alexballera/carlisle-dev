'use strict'

import yo from 'yo-yo'
import header from './templates/banner-header'
import breadcrumb from './templates/breadcrumbs'
import banner from './templates/carousel-staff'
import footer from './templates/banner-footer'
import navbar from './templates/navbar-header'
import pictures from './templates/pictures'
import { main } from '../components/main'

export default () => {
  let el = yo`
  <section class="about services" id="services-consulting">
    <header class="banner">${header.template}</header>
    <nav class="navbar-header row no-gutters hidden-md-down" id="navbar-header">${navbar.template}</nav>
    <nav class="breadcrumb-header">${breadcrumb.template}</nav>
    <section class="about-content">
      <article class="about-description row no-gutters justify-content-center">
        <p class="about-parrafo col-11 col-sm-10 col-md-9 col-lg-8 col-xl-9">
          Our services are developed by an experienced team of skilled professionals who brings insight
          from multiple industries. We conduct fundamental research and quantitative analysis to develop
          ideas that we make actionable through our proprietary modeling. 
        </p>
        <p class="about-parrafo col-11 col-sm-10 col-md-9 col-lg-8 col-xl-9">
          And we execute our ideas with the systemic assurance that comes from dedicated risk and liquidity
          management and proven technology and information infrastructure. 
        </p>
      </article>
      <article class="row no-gutters justify-content-around"">
        ${pictures.structuring}
      </article>
    </section>
    <footer class="home-footer hidden-md-up">${footer.template}</footer>
    <footer class="opportunities-banner hidden-sm-down">${banner.template}</footer>
  </section>
  `

  main.appendChild(el)
}
