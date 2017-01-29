'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'
import showAbout from '../../navigation/showAbout'
import showHome from '../../navigation/showHome'
import showTeam from '../../navigation/showTeam'
import showServices from '../../navigation/showServices'

var nav = yo`
<nav class="navbar navbar-toggleable-md navbar-light bg-faded center" id="topNavbar">
  <button class="navbar-toggler navbar-toggler-right navbar-button" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span>Menu </span> <i class="fa fa-bars" aria-hidden="true"></i>
  </button>
  <a class="navbar-brand" href="" id="linkHome" onclick=${showHome}>
    <img src="./images/logo.png" alt="Carlisle">
  </a>
  <div class="collapse navbar-collapse justify-content-end navbar-top" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link align-middle" href="" id="linkAbout" onclick=${showAbout}>About Us <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" id="linkTeam" onclick=${showTeam}>Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" id="linkServices" onclick=${showServices}>Our Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" id="linkCarrers">Carrers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="" id="linkContact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
`
export default () => {
  var header = document.getElementById('header')
  empty(header).appendChild(nav)
}
