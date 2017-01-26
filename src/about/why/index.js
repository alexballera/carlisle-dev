'use strict'
import yo from 'yo-yo'
import data from '../../data'

export default () => {
  var navbarHeader = document.getElementById('navbar-header')
  var linkWhy = navbarHeader.childNodes[0].childNodes[1].childNodes[1]
  var bannerHeaderImage = document.getElementById('banner-header-image-about')
  var aboutContent = document.getElementById('about-content')
  var aboutItems = document.getElementById('about-items')
  var breadcrumbItems = document.querySelectorAll('li.breadcrumb-item')

  var picture = yo`
  <picture class="content-picture about-why-picture row no-gutters hidden-sm-up justify-content-center" id="about-why">
    <img class="d-block img-fluid" src="${data.staff.lucy.avatar}" alt="" id="about-why-img">
    <div class="row align-items-center no-gutters about-why-picture-container">
      <h2 class="content-picture-title col-6">
          Get In Touch
      </h2>
      <p class="content-picture-parrafo col-12">
          When you need an investment solution for your next business opportunity or challenge,
          please get in touch.
      </p>
      <div class="col-8">
        <div class="row no-gutters justify-content-start about-why-picture-contacto">
          <a href="#" class="content-picture-boton col-6">Call Us</a>
          <span class="col-4 about-why-picture-icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
        </div>
      </div>
    </div>
    <div class="about-why-picture-bgtransparent"></div>
  </picture>`

  var titleWhy = document.createElement('h2')
  titleWhy.setAttribute('class', 'content-title')
  titleWhy.innerHTML = 'Why Carlisle'

  var sectionDescription = aboutContent.childNodes[1]

  linkWhy.addEventListener('click', showWhy)

  function showWhy (e) {
    e.preventDefault()
    setTimeout(() => {
      bannerHeaderImage.setAttribute('src', `${data.pictures.banners.header.about_why}`)
      aboutContent.insertBefore(titleWhy, sectionDescription)
      aboutItems.style.display = 'none'
      linkWhy.style.color = '#F8A308'
      breadcrumbs()
      parraphs()
      addPicture()
    }, 700)

    function parraphs () {
      var aboutDescription = aboutContent.childNodes[2]
      var parrafo1 = aboutContent.childNodes[2].childNodes[1]
      var parrafo2 = aboutContent.childNodes[2].childNodes[3]
      var parrafo3 = parrafo1.cloneNode(true)
      var parrafo4 = parrafo2.cloneNode(true)

      aboutDescription.appendChild(parrafo3)
      aboutDescription.appendChild(parrafo4)

      parrafo1.innerHTML = `Our experience gives us the insight and patience 
      to identify opportunities with consistent absolute returns.`
      parrafo2.innerHTML = `To capitalize on tomorrowś opportunity, we uncover
      meaningful insights that transcend today's markets. We collaborate with 
      our clients to define opportunities together. The opportunity to innovate,
      perform, and excel.`
      parrafo3.innerHTML = `The opportunity to set new standards of market efficiency,
      client succes, and institutional excellence. The opportunity to see in new ways
      and excecute upon new ideas.`
      parrafo4.innerHTML = `For our clients. For our partners. For the market is a 
      whole. In every business relationship. Carlisle strives to be a trusted partner.
      We move to wherever opportunity exists, bringing our clients and partners with us.`

      parrafo1.style.fontSize = '1.45rem'
      parrafo3.style.fontSize = '1.45rem'
    }
  }

  function addPicture () {
    document.getElementById('about-content').childNodes[2].appendChild(picture)
  }

  var newlink = document.createElement('a')
  newlink.addEventListener('click', breadcrumbShowAbout)

  function breadcrumbs () {
    newlink.setAttribute('href', '#')
    newlink.setAttribute('class', 'breadcrumb-link')
    newlink.setAttribute('id', 'breadcrumb-link-2')
    newlink.innerHTML = 'About Us'

    breadcrumbItems[1].innerHTML = ''
    breadcrumbItems[1].appendChild(newlink)
    breadcrumbItems[2].style.display = 'block'
    breadcrumbItems[2].innerHTML = 'Why Carlisle?'
    breadcrumbItems[2].classList.add('active')
  }

  function breadcrumbShowAbout (e) {
    console.log('Hicieron click en About Us')
    e.preventDefault()
    aboutBreadcrumbs()
  }

  function aboutBreadcrumbs () {
    breadcrumbItems[1].innerHTML = 'About Us'
    breadcrumbItems[1].classList.add('active')
    breadcrumbItems[2].style.display = 'none'
  }
}
