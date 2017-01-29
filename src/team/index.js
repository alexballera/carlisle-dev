'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'
import bannerHeader from './templates/banner-header'
import breadcrumb from './templates/breadcrumbs'
import banner from './templates/carousel-staff'
import footer from './templates/banner-footer'

var el = yo`
<section class="about" id="team">
  <header class="banner">${bannerHeader.template}</header>
  <nav class="breadcrumb-header">${breadcrumb.template}</nav>
  <section class="about-content">
    <article class="about-description row no-gutters justify-content-center">
    </article>
  </section>
  <footer class="home-footer hidden-md-up">${footer.template}</footer>
  <footer class="opportunities-banner hidden-sm-down">${banner.template}</footer>
</section>
`

var teampage = document.getElementById('teampage')

export default () => {
  empty(teampage).appendChild(el)
}
