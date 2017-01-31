'use strict'

import yo from 'yo-yo'
import header from './templates/banner-header'
import breadcrumb from './templates/breadcrumbs'
import banner from './templates/carousel-staff'
import footer from './templates/banner-footer'
import team from './templates/team'
import { main } from '../components/main'

export default () => {
  let el = yo`
  <section class="about services services-item team" id="team">
    <header class="banner">${header.template}</header>
    <nav class="breadcrumb-header">${breadcrumb.template}</nav>
    <section>
      ${team.phillip}
      ${team.jose}
      ${team.victor}
      ${team.tim}
      ${team.xavier}
    </section>
    <footer class="home-footer hidden-md-up">${footer.template}</footer>
    <footer class="opportunities-banner hidden-sm-down">${banner.template}</footer>
  </section>
  `

  main.appendChild(el)
}
