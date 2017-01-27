'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'
import bannerHeader from './templates/banner-header'
import navbarHeader from './templates/navbar-header'
import breadcrumb from './templates/breadcrumbs'
import picture from './templates/pictures-about'
import footer from './templates/banner-footer'
import data from '../data'
import banner from './templates/carousel-staff'

var el = yo`
<section class="about" id="why">
  <header class="banner" id="banner-about">${bannerHeader.why}</header>
  <nav class="row no-gutters justify-content-center navbar-header" id="navbar-header">${navbarHeader.why}</nav>
  <nav class="row no-gutters align-items-center breadcrumb-header" id="breadcrumb-header">${breadcrumb.template}</nav>
  <section class="about-content" id="about-content">
    <div class="opportunities-title col-12 col-md-8 col-lg-7 col-xl-6">
        <h2 class="content-title">Why Carlisle?</h2>
    </div>
    <article class="about-description row no-gutters justify-content-center">
      <div class="col-10 col-lg-6">
        <div class="row no-gutters justify-content-center">
          <p class="about-parrafo col-12">
            Our experience gives us the insight and patience 
          to identify opportunities with consistent absolute returns.
          </p>
          <p class="about-parrafo col-12">
            To capitalize on tomorrowś opportunity, we uncover
          meaningful insights that transcend today's markets. We collaborate with 
          our clients to define opportunities together. The opportunity to innovate,
          perform, and excel. 
          </p>
          <p class="about-parrafo col-12">
            The opportunity to set new standards of market efficiency,
          client succes, and institutional excellence. The opportunity to see in new ways
          and excecute upon new ideas.
          </p>
          <p class="about-parrafo col-12">
            For our clients. For our partners. For the market is a 
          whole. In every business relationship. Carlisle strives to be a trusted partner.
          We move to wherever opportunity exists, bringing our clients and partners with us. 
          </p>
        </div>
      </div>
      <div class="col-10 col-md-5 col-lg-4 about-why-container-picture">
        ${picture.template}
      </div>
    </article>
    <article class="row no-gutters justify-content-center about-items" id="about-items">
      <div class="col-12 col-xl-9 about-banner-item" id="about-banner-why">
        <div class="opportunities-carousel opportunities-carousel-mobile row no-gutters justify-content-around">         
        </div>
      </div>      
    </article>
    <section class="opportunities-banner">
      ${banner.why}
    </section>
  </section>
  <footer class="home-footer" id="home-footer">${footer.why}</footer>
</section>
`

var whypage = document.getElementById('whypage')

export default () => {
  empty(whypage).appendChild(el)
  // Banner Header
  let bannerHeaderImage = document.getElementById('banner-header-image-why')
  let bannerHeader = document.getElementById('banner-header-title-why')
  let bannerHeaderContenido = document.getElementById('banner-header-contenido-why')
  let bannerHeaderBoton = document.getElementById('banner-header-boton-why')
  let BannerHeaderBgBottom = document.getElementById('banner-header-bg-bottom-why')

  // Navbar Header
  let navItemsHeader = document.querySelectorAll('a.nav-link-why')

  // Breadcrumb
  let breadcrumbItems = document.querySelectorAll('li.breadcrumb-item-why')
  let breadcrumbLinks = document.querySelectorAll('a.breadcrumb-link-why')

  // Parrafos
  let parrafo = document.getElementById('why').childNodes[7].childNodes[3].childNodes[1].childNodes[1]

  // Banner Header
  bannerHeaderImage.setAttribute('src', `${data.pictures.banners.header.about_why}`)
  bannerHeader.innerHTML = 'About us'
  bannerHeaderContenido.innerHTML = `Carlisle was established to provide minimally
                                    correlated fund options in the alternative asset space`
  bannerHeaderImage.style.height = '200px'
  bannerHeaderBoton.style.display = 'none'
  BannerHeaderBgBottom.style.display = 'none'

  // Navbar Header
  navItemsHeader[0].innerHTML = 'Why Carlisle'
  navItemsHeader[1].innerHTML = 'Our difference'
  navItemsHeader[2].innerHTML = 'Community reach'
  navItemsHeader[3].style.display = 'none'
  navItemsHeader[4].style.display = 'none'
  navItemsHeader[5].style.display = 'none'

  // Breadcrumb
  breadcrumbLinks[0].innerHTML = 'Home'
  breadcrumbLinks[1].innerHTML = 'About Us'
  breadcrumbItems[2].innerHTML = 'Why Carlisle'
  breadcrumbItems[2].classList.add('active')
  breadcrumbItems[3].style.display = 'none'
  breadcrumbItems[4].style.display = 'none'
  breadcrumbItems[5].style.display = 'none'

  // Parrafos
  parrafo.childNodes[1].style.fontSize = '1.25rem'
  parrafo.childNodes[5].style.fontSize = '1.25rem'
}
