'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'
import header from '../components/banner-header'
import opportunities from './components/opportunities'
import team from './components/team'
import study from './components/study'
import footer from './components/footer'
import data from '../data'

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

  let bannerHeaderImage = document.getElementById('banner-header-image')
  let bannerHeader = document.getElementById('banner-header-title')
  let bannerHeaderContenido = document.getElementById('banner-header-contenido')

  let staffImage = document.querySelectorAll('img.staff-miembro-img')
  let staffNombre = document.querySelectorAll('span.staff-miembro-nombre')
  let staffCargo = document.querySelectorAll('span.staff-miembro-cargo')

  let pictureSlide = document.querySelectorAll('picture.content-picture')

  // Banner Header
  bannerHeaderImage.setAttribute('src', 'http://lorempixel.com/1440/500/city/')
  bannerHeader.innerHTML = 'Innovations diversified investment solutions'
  bannerHeaderContenido.innerHTML = `Carlisle is a leading, highly diversified global investment management firm,
                      Carlisle applies its deep experience and specialized expertise across a range of investment
                      strategies provate equity, credit, liquid markets and traditional fixed income - on behalf of
                      investors and private clients wordwide.`

  // Slider opportunities
  pictureSlide[0].classList.add('col-6', 'col-xl-5')
  pictureSlide[1].classList.add('col-6', 'col-xl-5')
  pictureSlide[2].classList.add('col-6', 'col-xl-5')
  pictureSlide[3].classList.add('col-6', 'col-xl-5')
  pictureSlide[4].classList.add('col-6', 'col-xl-5')
  pictureSlide[5].classList.add('col-6', 'col-xl-5')

  // Banner Staff
  nameBanner.innerHTML = `${data.staff.lucy.nombre}`
  cargoBanner.innerHTML = `${data.staff.lucy.cargo}`
  avatarBanner.setAttribute('src', `${data.staff.lucy.avatar}`)
  bannerWorkBgimage.setAttribute('src', 'http://lorempixel.com/1400/400/city/')

  // Team Avatar
  staffImage[0].setAttribute('src', `${data.staff.victor.avatar}`)
  staffImage[1].setAttribute('src', `${data.staff.jose.avatar}`)
  staffImage[2].setAttribute('src', `${data.staff.phillip.avatar}`)
  staffImage[3].setAttribute('src', `${data.staff.tim.avatar}`)
  staffImage[4].setAttribute('src', `${data.staff.xavier.avatar}`)

  // Team Nombre
  staffNombre[0].innerHTML = `${data.staff.jose.nombre}`
  staffNombre[1].innerHTML = `${data.staff.phillip.nombre}`
  staffNombre[2].innerHTML = `${data.staff.tim.nombre}`
  staffNombre[3].innerHTML = `${data.staff.xavier.nombre}`

  // Team Cargo
  staffCargo[0].innerHTML = `${data.staff.jose.cargo}`
  staffCargo[1].innerHTML = `${data.staff.phillip.cargo}`
  staffCargo[2].innerHTML = `${data.staff.tim.cargo}`
  staffCargo[3].innerHTML = `${data.staff.xavier.cargo}`
}
