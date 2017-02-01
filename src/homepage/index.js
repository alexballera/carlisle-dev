'use strict'

import yo from 'yo-yo'
import header from './templates/banner-header'
import opportunities from './templates/opportunities'
import team from './templates/team'
import study from './templates/study'
import footer from './templates/banner-footer'
import { main } from '../components/main'

export default () => {
  let el = yo`
  <section class="home" id="home">
    <header class="banner" id="banner">${header.home}</header>
    <section class="content" id="content">
      <article class="opportunities" id="opportunities">${opportunities.template}</article>
      <article class="team" id="staff">${team.template}</article>
      <article class="study" id="study">${study.template}</article>
    </section>
    <footer class="home-footer" id="home-footer">${footer.homepage}</footer>
  </section>
  `

  main.appendChild(el)
}
