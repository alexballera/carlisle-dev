'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'
import bannerHeader from './templates/banner-header'
import breadcrumb from './templates/breadcrumbs'
import banner from './templates/carousel-staff'
import footer from './templates/banner-footer'
import navbar from './templates/navbar-header'

var el = yo`
<section class="about" id="servicesStructuring">
  <header class="banner">${bannerHeader.template}</header>
  <nav class="navbar-header row no-gutters" id="navbarHeader-services-structuring">${navbar.template}</nav>
  <nav class="breadcrumb-header" id="breadcrumb-services-structuring">${breadcrumb.template}</nav>
  <section class="about-content">
    <div class="opportunities-title row no-gutters">
        <h2 class="content-title col-12 col-md-8 col-lg-7 col-xl-6">Structuring</h2>
    </div>
    <article class="about-description row no-gutters justify-content-center">
    </article>
  </section>
  <footer class="home-footer hidden-md-up">${footer.template}</footer>
  <footer class="opportunities-banner hidden-sm-down">${banner.template}</footer>
</section>
`

var servicesStructuringPage = document.getElementById('servicesStructuringPage')

export default () => {
  empty(servicesStructuringPage).appendChild(el)

  // navbarHeader
  var navbarHeader = document.getElementById('navbarHeader-services-structuring')
  navbarHeader.firstChild.childNodes[1].childNodes[1].childNodes[1].style.color = '#F8A308'
}
