'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'
import header from '../components/banner-header'
import opportunities from './components/opportunities'
import team from './components/team'
import study from './components/study'
import footer from './components/footer'
import data from '../data'

export default () => {
  let el = yo`
  <section class="home" id="home">
    <header class="banner" id="banner">${header.home}</header>
    <section class="content" id="content">
      <article class="opportunities" id="opportunities">${opportunities.template}</article>
      <article class="team" id="team">${team.template}</article>
      <article class="study" id="study">${study.template}</article>
    </section>
    <footer class="home-footer" id="home-footer">${footer.template}</footer>
  </section>
  `

  let homepage = document.getElementById('homepage')

  empty(homepage).appendChild(el)

  let bannerHeaderImage = document.getElementById('banner-header-image-home')
  let bannerHeader = document.getElementById('banner-header-title-home')
  let bannerHeaderContenido = document.getElementById('banner-header-contenido-home')
  let staffImage = document.querySelectorAll('img.staff-miembro-img')
  let staffNombre = document.querySelectorAll('span.staff-miembro-nombre')
  let staffCargo = document.querySelectorAll('span.staff-miembro-cargo')
  let pictureSlide = document.querySelectorAll('picture.content-picture')
  let picturesAbout = document.getElementById('opportunities-carousel').childNodes

  // Banner Header
  bannerHeaderImage.setAttribute('src', `${data.pictures.banners.header.home}`)
  bannerHeader.innerHTML = 'Innovations diversified investment solutions'
  bannerHeaderContenido.innerHTML = `Carlisle is a leading, highly diversified global investment management firm,
                      Carlisle applies its deep experience and specialized expertise across a range of investment
                      strategies provate equity, credit, liquid markets and traditional fixed income - on behalf of
                      investors and private clients wordwide.`

  // Carousel opportunities
  pictureSlide[0].classList.add('col-6', 'col-xl-5')
  pictureSlide[1].classList.add('col-6', 'col-xl-5')
  pictureSlide[2].classList.add('col-6', 'col-xl-5')
  pictureSlide[3].classList.add('col-6', 'col-xl-5')

  pictureSlide[0].childNodes[1].setAttribute('src', `${data.pictures.home.slide.why}`)
  pictureSlide[1].childNodes[1].setAttribute('src', `${data.pictures.home.slide.difference}`)
  pictureSlide[2].childNodes[1].setAttribute('src', `${data.pictures.home.slide.difference}`)
  pictureSlide[3].childNodes[1].setAttribute('src', `${data.pictures.home.slide.community}`)

  // Section why - difference - community
  picturesAbout[1].classList.remove('col-6', 'col-xl-5')
  picturesAbout[3].classList.remove('col-6', 'col-xl-5')
  picturesAbout[5].classList.remove('col-6', 'col-xl-5')
  picturesAbout[1].classList.add('col-10')
  picturesAbout[3].classList.add('col-10')
  picturesAbout[5].classList.add('col-10')

  document.getElementById('home-why').setAttribute('src', `${data.pictures.home.about.why}`)
  document.getElementById('home-difference').setAttribute('src', `${data.pictures.home.about.difference}`)
  document.getElementById('home-community').setAttribute('src', `${data.pictures.home.about.community}`)

  // TEAM Avatar
  staffImage[0].setAttribute('src', `${data.staff.victor.avatar}`)
  staffImage[1].setAttribute('src', `${data.staff.jose.avatar}`)
  staffImage[2].setAttribute('src', `${data.staff.phillip.avatar}`)
  staffImage[3].setAttribute('src', `${data.staff.tim.avatar}`)
  staffImage[4].setAttribute('src', `${data.staff.xavier.avatar}`)

  // TEAM Nombre
  staffNombre[0].innerHTML = `${data.staff.jose.nombre}`
  staffNombre[1].innerHTML = `${data.staff.phillip.nombre}`
  staffNombre[2].innerHTML = `${data.staff.tim.nombre}`
  staffNombre[3].innerHTML = `${data.staff.xavier.nombre}`

  // TEAM Cargo
  staffCargo[0].innerHTML = `${data.staff.jose.cargo}`
  staffCargo[1].innerHTML = `${data.staff.phillip.cargo}`
  staffCargo[2].innerHTML = `${data.staff.tim.cargo}`
  staffCargo[3].innerHTML = `${data.staff.xavier.cargo}`
}
