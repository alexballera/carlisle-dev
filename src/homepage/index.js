'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'
import header from './templates/header'
import opportunities from './templates/opportunities'
import team from './templates/team'
import study from './templates/study'
import footer from './templates/footer'

var el = yo`
<section class="home" id="home">
  <header class="banner" id="banner">${header.template}</header>
  <section class="content" id="content">
    <article class="opportunities" id="opportunities">${opportunities.template}</article>
    <article class="team" id="team">${team.template}</article>
    <article class="study" id="study">${study.template}</article>
  </section>
  <footer class="home-footer" id="home-footer">${footer.template}</footer>
</section>
`

var main = document.getElementById('main')

export default () => {
  empty(main).appendChild(el)
  let nameBanner = document.getElementById('nameBanner')
  let cargoBanner = document.getElementById('cargoBanner')
  let avatarBanner = document.getElementById('avatarBanner')
  let bannerWorkBgimage = document.getElementById('banner-work-bgimage')

  nameBanner.innerHTML = 'Lucy Mcnazza'
  cargoBanner.innerHTML = 'Chief Developer At Company'
  avatarBanner.setAttribute('src', './images/lucy-mcnazza.jpg')
  bannerWorkBgimage.setAttribute('src', 'http://lorempixel.com/1400/400/city/')
}
