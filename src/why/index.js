'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'
import bannerHeader from './templates/banner-header'
import navbarHeader from '../components/navbar-header'
import breadcrumb from '../components/breadcrumb'
// import picture from '../components/picture-about'
import footer from './templates/banner-footer'
import data from '../data'
import banner from '../components/banner-staff'

var el = yo`
<section class="about" id="why">
  <header class="banner" id="banner-about">${bannerHeader.why}</header>
  <nav class="row no-gutters justify-content-center navbar-header" id="navbar-header">${navbarHeader.why}</nav>
  <nav class="row no-gutters align-items-center breadcrumb-header" id="breadcrumb-header">${breadcrumb.why}</nav>
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
  let navItems = document.querySelectorAll('a.nav-link-header')

  // Breadcrumb
  let breadcrumbItems = document.querySelectorAll('li.breadcrumb-item-why')
  let breadcrumbLinks = document.querySelectorAll('a.breadcrumb-link-why')

  let aboutWhy = document.getElementById('about-why')
  let aboutDifference = document.getElementById('about-difference')
  let aboutCommunity = document.getElementById('about-community')

  // Banner Header
  bannerHeaderImage.setAttribute('src', `${data.pictures.banners.header.about_why}`)
  bannerHeader.innerHTML = 'About us'
  bannerHeaderContenido.innerHTML = `Carlisle was established to provide minimally
                                    correlated fund options in the alternative asset space`
  bannerHeaderImage.style.height = '200px'
  bannerHeaderBoton.style.display = 'none'
  BannerHeaderBgBottom.style.display = 'none'

  // Navbar Header
  navItems[6].innerHTML = 'Why Carlisle'
  navItems[7].innerHTML = 'Our difference'
  navItems[8].innerHTML = 'Community reach'
  navItems[9].style.display = 'none'
  navItems[10].style.display = 'none'
  navItems[11].style.display = 'none'

  // Breadcrumb
  breadcrumbLinks[0].innerHTML = 'Home'
  breadcrumbLinks[1].innerHTML = 'About Us'
  breadcrumbItems[2].innerHTML = 'Why Carlisle'
  breadcrumbItems[2].classList.add('active')
  breadcrumbItems[3].style.display = 'none'
  breadcrumbItems[4].style.display = 'none'
  breadcrumbItems[5].style.display = 'none'

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
