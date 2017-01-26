'use strict'
import data from '../../data'

export default () => {
  var navbarHeader = document.getElementById('navbar-header')
  var linkWhy = navbarHeader.childNodes[0].childNodes[1].childNodes[1]
  var bannerHeaderImage = document.getElementById('banner-header-image-about')
  linkWhy.addEventListener('click', showWhy)

  function showWhy (e) {
    e.preventDefault()
    setTimeout(() => {
      bannerHeaderImage.setAttribute('src', `${data.pictures.banners.header.about_why}`)
    }, 700)
  }
}
