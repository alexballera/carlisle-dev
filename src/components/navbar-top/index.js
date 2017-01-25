'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'

var header = document.getElementById('header')

var nav = yo`
<nav class="navbar navbar-toggleable-md navbar-light bg-faded center">
  <button class="navbar-toggler navbar-toggler-right navbar-button" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span>Menu </span> <i class="fa fa-bars" aria-hidden="true"></i>
  </button>
  <a class="navbar-brand" href="#">
    <img src="./images/logo.png" alt="Carlisle">
  </a>
  <div class="collapse navbar-collapse justify-content-end navbar-top" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link align-middle" href="">About Us <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Our Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Carrers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Contact</a>
      </li>
    </ul>
  </div>
</nav>
`

export default () => {
  empty(header).appendChild(nav)
}
