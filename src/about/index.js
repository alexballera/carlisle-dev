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
        <p class="about-parrafo col-11 col-sm-10 col-md-9 col-lg-8 col-xl-9">
          Headquartered in Luxembourg, our state-of-the-art facilities and statistical modeling systems incorporate
          knowledge gained from 30+ years of investment experience. While the market for alternative assets is based
          on a finite set of criteria, investors have long demanded a leaner, more efficient alternative investment
          opportunities. 
        </p>
        <p class="about-parrafo col-11 col-sm-10 col-md-9 col-lg-8 col-xl-9">
          Our clients acces our investment expertise across numerous areas whitin the alternative asset space. We operate
          independently, allowing us to focus solely on investor needs, whithout conflicts of interest. Our goal is to add
          value with personalized service and a relentless commitment to quality and responsiveness. 
        </p>
      </article>
      <article class="row no-gutters justify-content-center about-items" id="about-items">
        <div class="col-12 col-xl-9 about-banner-item" id="about-banner-why">
          <div class="opportunities-carousel opportunities-carousel-mobile row no-gutters justify-content-around">
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

  // Banner Header
  let bannerHeaderImage = document.getElementById('banner-header-image-about')
  let bannerHeader = document.getElementById('banner-header-title-about')
  let bannerHeaderContenido = document.getElementById('banner-header-contenido-about')
  let bannerHeaderBoton = document.getElementById('banner-header-boton')

  // Navbar Header
  let navItemsAbout = document.querySelectorAll('a.nav-link-about')

  // Breadcrumb
  let breadcrumbItems = document.querySelectorAll('li.breadcrumb-item-about')
  let breadcrumbLinks = document.querySelectorAll('a.breadcrumb-link-about')

  let aboutWhy = document.getElementById('about-why')
  let aboutDifference = document.getElementById('about-difference')
  let aboutCommunity = document.getElementById('about-community')

  // Banner Header
  bannerHeaderImage.setAttribute('src', `${data.pictures.banners.header.about_us}`)
  bannerHeader.innerHTML = 'About us'
  bannerHeaderContenido.innerHTML = `Carlisle was established to provide minimally
                                    correlated fund options in the alternative asset space`
  bannerHeaderImage.style.height = '200px'
  bannerHeaderBoton.style.display = 'none'

  // Navbar Header
  navItemsAbout[0].innerHTML = 'Why Carlisle'
  navItemsAbout[1].innerHTML = 'Our difference'
  navItemsAbout[2].innerHTML = 'Community reach'

  // Breadcrumb
  breadcrumbLinks[0].innerHTML = 'Home'
  breadcrumbItems[1].innerHTML = 'About Us'
  breadcrumbItems[1].classList.add('active')

  // Section why - difference - community
  aboutWhy.childNodes[1].setAttribute('src', `${data.pictures.about.why}`)
  aboutDifference.childNodes[1].setAttribute('src', `${data.pictures.about.difference}`)
  aboutCommunity.childNodes[1].setAttribute('src', `${data.pictures.about.community}`)

  aboutWhy.childNodes[3].classList.remove('row', 'align-items-center', 'no-gutters')
  aboutDifference.childNodes[3].classList.remove('row', 'align-items-center', 'no-gutters')
  aboutCommunity.childNodes[3].classList.remove('row', 'align-items-center', 'no-gutters')

  aboutWhy.classList.add('about-why-picture', 'col-10', 'col-sm-9', 'col-md-5', 'col-xl-3')
  aboutDifference.classList.add('about-why-picture', 'col-10', 'col-sm-9', 'col-md-5', 'col-xl-3')
  aboutCommunity.classList.add('about-why-picture', 'col-10', 'col-sm-9', 'col-md-5', 'col-xl-3')

  var div1 = document.createElement('div')
  var div2 = document.createElement('div')
  var div3 = document.createElement('div')

  div1.setAttribute('class', 'about-why-background')
  div2.setAttribute('class', 'about-why-background')
  div3.setAttribute('class', 'about-why-background')

  aboutWhy.appendChild(div1)
  aboutDifference.appendChild(div2)
  aboutCommunity.appendChild(div3)
}
