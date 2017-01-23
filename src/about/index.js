'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'
import bannerHeader from '../components/banner-header'
import navbarHeader from '../components/navbar-header'
import breadcrumb from '../components/breadcrumb'

var el = yo`
<section class="about" id="about">
  <header class="banner" id="banner-about">${bannerHeader.template}</header>
  <nav class="row no-gutters justify-content-center navbar-header" id="navbar-header">${navbarHeader.template}</nav>
  <nav class="row no-gutters align-items-center breadcrumb-header" id="breadcrumb-header">${breadcrumb.template}</nav>
  <section class="content" id="content-about">
    <article class="opportunities" id="opportunities"></article>
    <article class="team" id="team"></article>
    <article class="study" id="study"></article>
  </section>
  <footer class="home-footer" id="about-footer"></footer>
</section>
`

var main = document.getElementById('main')

export default () => {
  empty(main).appendChild(el)
/*
  let nameBanner = document.getElementById('nameBanner')
  let cargoBanner = document.getElementById('cargoBanner')
  let avatarBanner = document.getElementById('avatarBanner')
  let bannerWorkBgimage = document.getElementById('banner-work-bgimage')
*/
  let bannerHeaderImage = document.getElementById('banner-header-image')
  let bannerHeader = document.getElementById('banner-header-title')
  let bannerHeaderContenido = document.getElementById('banner-header-contenido')
  let bannerHeaderBoton = document.getElementById('banner-header-boton')
  let BannerHeaderBgBottom = document.getElementById('banner-header-bg-bottom')
  let navItems = document.querySelectorAll('a.nav-link-header')
  let breadcrumbItems = document.querySelectorAll('li.breadcrumb-item')
  let breadcrumbLinks = document.querySelectorAll('a.breadcrumb-link')

  // Banner Header
  bannerHeaderImage.setAttribute('src', 'http://lorempixel.com/1440/500/city/')
  bannerHeader.innerHTML = 'About us'
  bannerHeaderContenido.innerHTML = `Carlisle was established to provide minimally
                                    correlated fund options in the alternative asset space`
  bannerHeaderImage.style.minHeight = '250px'
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

  // Banner Staff
/*
  nameBanner.innerHTML = 'Lucy Mcnazza'
  cargoBanner.innerHTML = 'Chief Developer At Company'
  avatarBanner.setAttribute('src', './images/lucy-mcnazza.jpg')
  bannerWorkBgimage.setAttribute('src', 'http://lorempixel.com/1400/400/city/')
*/
}
