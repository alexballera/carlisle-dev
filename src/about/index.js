'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'
import bannerHeader from '../components/banner-header'
import navbarHeader from '../components/navbar-header'
import breadcrumb from '../components/breadcrumb'
import picture from '../components/picture-about'
import data from '../data'
// import $ from 'jquery'

var el = yo`
<section class="about" id="about">
  <header class="banner" id="banner-about">${bannerHeader.about}</header>
  <nav class="row no-gutters justify-content-center navbar-header" id="navbar-header">${navbarHeader.template}</nav>
  <nav class="row no-gutters align-items-center breadcrumb-header" id="breadcrumb-header">${breadcrumb.template}</nav>
  <section class="about-content" id="about-content">
    <article class="about-description row no-gutters justify-content-center">
      <p class="about-parrafo col-11 col-sm-10 col-md-9 col-lg-8">
        Headquartered in Luxembourg, our state-of-the-art facilities and statistical modeling systems incorporate
        knowledge gained from 30+ years of investment experience. While the market for alternative assets is based
        on a finite set of criteria, investors have long demanded a leaner, more efficient alternative investment
        opportunities. 
      </p>
      <p class="about-parrafo col-11 col-sm-10 col-md-9 col-lg-8">
        Our clients acces our investment expertise across numerous areas whitin the alternative asset space. We operate
        independently, allowing us to focus solely on investor needs, whithout conflicts of interest. Our goal is to add
        value with personalized service and a relentless commitment to quality and responsiveness. 
      </p>
    </article>
    <article class="row no-gutters about-items" id="about-items">
      <div class="col-12 about-banner-item" id="about-banner-why">
        <div class="opportunities-carousel opportunities-carousel-mobile row no-gutters justify-content-around">
          ${picture.about.why}
          ${picture.about.difference}
          ${picture.about.community}
        </div>
      </div>      
    </article>
    <article class="study" id="study"></article>
  </section>
  <footer class="home-footer" id="about-footer"></footer>
</section>
`

var aboutpage = document.getElementById('aboutpage')

export default () => {
  empty(aboutpage).appendChild(el)
/*
  let nameBanner = document.getElementById('nameBanner')
  let cargoBanner = document.getElementById('cargoBanner')
  let avatarBanner = document.getElementById('avatarBanner')
  let bannerWorkBgimage = document.getElementById('banner-work-bgimage')
*/
  let bannerHeaderImage = document.getElementById('banner-header-image-about')
  let bannerHeader = document.getElementById('banner-header-title-about')
  let bannerHeaderContenido = document.getElementById('banner-header-contenido-about')
  let bannerHeaderBoton = document.getElementById('banner-header-boton')
  let BannerHeaderBgBottom = document.getElementById('banner-header-bg-bottom')
  let navItems = document.querySelectorAll('a.nav-link-header')
  let breadcrumbItems = document.querySelectorAll('li.breadcrumb-item')
  let breadcrumbLinks = document.querySelectorAll('a.breadcrumb-link')

  // Banner Header
  bannerHeaderImage.setAttribute('src', `${data.pictures.banners.header.about_us}`)
  bannerHeader.innerHTML = 'About us'
  bannerHeaderContenido.innerHTML = `Carlisle was established to provide minimally
                                    correlated fund options in the alternative asset space`
  bannerHeaderImage.style.height = '200px'
  bannerHeaderBoton.style.display = 'none'
  BannerHeaderBgBottom.style.display = 'none'

  // Navbar Header
  navItems[0].innerHTML = 'Why Carlisle'
  navItems[1].innerHTML = 'Our difference'
  navItems[2].innerHTML = 'Community reach'
  navItems[3].style.display = 'none'
  navItems[4].style.display = 'none'
  navItems[5].style.display = 'none'

  // Breadcrumb
  breadcrumbLinks[0].innerHTML = 'Home'
  breadcrumbItems[1].innerHTML = 'About Us'
  breadcrumbItems[1].classList.add('active')
  breadcrumbItems[3].style.display = 'none'
  breadcrumbItems[4].style.display = 'none'
  breadcrumbItems[5].style.display = 'none'

  // Section why - difference - community
  document.getElementById('about-why-img').setAttribute('src', `${data.pictures.about.why}`)
  document.getElementById('about-difference-img').setAttribute('src', `${data.pictures.about.difference}`)
  document.getElementById('about-community-img').setAttribute('src', `${data.pictures.about.community}`)

  document.getElementById('about-why').classList.add('about-why-picture', 'col-10', 'col-sm-9', 'col-md-5', 'col-xl-4')
  document.getElementById('about-difference').classList.add('about-why-picture', 'col-10', 'col-sm-9', 'col-md-5', 'col-xl-4')
  document.getElementById('about-community').classList.add('about-why-picture', 'col-10', 'col-sm-9', 'col-md-5', 'col-xl-4')

  // Banner Staff
/*
  nameBanner.innerHTML = 'Lucy Mcnazza'
  cargoBanner.innerHTML = 'Chief Developer At Company'
  avatarBanner.setAttribute('src', './images/lucy-mcnazza.jpg')
  bannerWorkBgimage.setAttribute('src', 'http://lorempixel.com/1400/400/city/')
*/
}
