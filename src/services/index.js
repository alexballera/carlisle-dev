'use strict'

import yo from 'yo-yo'
import header from './templates/banner-header'
import breadcrumb from './templates/breadcrumbs'
import banner from './templates/carousel-staff'
import footer from './templates/banner-footer'
import navbar from './templates/navbar-header'
import { main } from '../components/main'

export default () => {
  let el = yo`
  <section class="about" id="services">
    <header class="banner">${header.template}</header>
    <nav class="navbar-header row no-gutters" id="navbar-header">${navbar.template}</nav>
    <nav class="breadcrumb-header">${breadcrumb.template}</nav>
    <section class="about-content">
      <article class="about-description row no-gutters justify-content-center">
      </article>
    </section>
    <footer class="home-footer hidden-md-up">${footer.template}</footer>
    <footer class="opportunities-banner hidden-sm-down">${banner.template}</footer>
  </section>
  `

  main.appendChild(el)
}
