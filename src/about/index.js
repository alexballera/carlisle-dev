'use strict'

import yo from 'yo-yo'
import header from './templates/banner-header'
import navbarHeader from './templates/navbar-header'
import breadcrumb from './templates/breadcrumbs'
import picture from './templates/pictures-about'
import footer from './templates/banner-footer'
import data from '../data'
import banner from './templates/carousel-staff'
import { main } from '../components/main'

export default () => {
  let el = yo`
  <section class="about" id="about">
    <header class="banner" id="banner-about">${header.template}</header>
    <nav class="navbar-header" id="navbar-header">${navbarHeader.template}</nav>
    <nav class="breadcrumb-header" id="breadcrumb-header">${breadcrumb.template}</nav>
    <section class="about-content" id="about-content">
      <article class="about-description row no-gutters justify-content-center">
        <p class="about-parrafo col-11 col-lg-10 col-xl-9">
          Headquartered in Luxembourg, our state-of-the-art facilities and statistical modeling systems incorporate
          knowledge gained from 30+ years of investment experience. While the market for alternative assets is based
          on a finite set of criteria, investors have long demanded a leaner, more efficient alternative investment
          opportunities. 
        </p>
        <p class="about-parrafo col-11 col-lg-10 col-xl-9">
          Our clients acces our investment expertise across numerous areas whitin the alternative asset space. We operate
          independently, allowing us to focus solely on investor needs, whithout conflicts of interest. Our goal is to add
          value with personalized service and a relentless commitment to quality and responsiveness. 
        </p>
      </article>
      <article class="row no-gutters justify-content-center about-items" id="about-items">
        <div class="col-11 col-lg-10 col-xl-9 about-banner-item" id="about-banner-why">
          <div class="opportunities-carousel opportunities-carousel-mobile row no-gutters">
            ${picture.why}
            ${picture.difference}
            ${picture.community}
          </div>
        </div>      
      </article>
      <section class="opportunities-banner">
        ${banner.template}
      </section>
    </section>
    <footer class="home-footer">${footer.template}</footer>
  </section>
  `

  main.appendChild(el)
}
