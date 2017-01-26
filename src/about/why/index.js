'use strict'
import data from '../../data'

export default () => {
  var navbarHeader = document.getElementById('navbar-header')
  var linkWhy = navbarHeader.childNodes[0].childNodes[1].childNodes[1]
  var bannerHeaderImage = document.getElementById('banner-header-image-about')
  var aboutContent = document.getElementById('about-content')
  var aboutItems = document.getElementById('about-items')

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
      parraphs()
      aboutItems.style.display = 'none'
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
}
