'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'
import showAbout from '../../navigation/showAbout'

var footer = document.getElementById('footer')

var el = yo`
<div class="container">
    <div class="row align-items-center footer-content">
        <div class="col-3 footer-logo">
            <img src="./images/logo-only.png"  alt="Carlisle Logo" class="footer-image">
        </div>
        <div class="col-5 col-md-6">
            <p class="footer-contenido">
                When you need an investment solution for your next business opportunity or 
                challenge, please get in touch
            </p>
        </div>
        <div class="col-4 col-md-3">
            <a href="#" type="" class="footer-boton" >Get in touch</a>
        </div>
    </div>
    <div class="row align-items-center justify-content-around">
        <div class="col-12 col-lg-4 footer-form">
            <form class="form-inline">
                <div class="form-group row">
                    <label class="sr-only" for="inlineFormInput col-2">Email</label>
                    <input type="email" class="form-control offset-1 col-7 offset-lg-0 col-lg-8" id="inlineFormInput" placeholder="Enter your email">
                    <button type="submit" class="btn col-3 col-lg-4">Submit</button>
                </div>
            </form>
        </div>
        <div class="col-6 col-lg-4 footer-menu menu1">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick=${showAbout}>About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Our Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Carrers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Carlisle Management</a>
                </li>
            </ul>
        </div>
        <div class="col-6 col-lg-4 footer-menu menu2">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Newsletter</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Private Statement</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Terms of Use</a>
                </li>
            </ul>
        </div>
    </div>
</div>
`

export default () => {
  empty(footer).appendChild(el)
}
