'use strict'
import yo from 'yo-yo'
import data from '../../../data'

module.exports = {
  phillip: yo`
    <section class="about-content row no-gutters justify-content-center">
      <article class="about-description row no-gutters justify-content-center">
        <div class="opportunities-title hidden-sm-down col-11">
          <h2 class="content-title">${data.staff.phillip.nombre}</h2>
          <h3 class="content-title team-title-cargo">${data.staff.phillip.cargo}</h3>
        </div>
        <p class="about-parrafo col-11">
          ${data.staff.phillip.bio_parrafo1} 
        </p>
        <p class="about-parrafo col-11">
          ${data.staff.phillip.bio_parrafo2}
        </p>
        <div class="col-11 team-principal-inner-container">
          <a href="${data.staff.phillip.linkedin}" target="_blank" class="red-social linkedin rounded-circle">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:${data.staff.phillip.correo}" class="red-social mail rounded-circle">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
        </div>
      </article>
      <article class="row no-gutters justify-content-around services-item-picture">
        <div class="opportunities-title col-11 hidden-md-up">
          <h2 class="content-title">${data.staff.phillip.nombre}</h2>
          <h3 class="content-title team-title-cargo">${data.staff.phillip.cargo}</h3>
        </div>
        <picture class="col-11">
          <img class="d-block img-fluid" src="${data.staff.phillip.avatar}" alt="" id="about-why-img">
        </picture>
      </article>
    </section>`,
  jose: yo`
    <section class="about-content row no-gutters justify-content-center">
      <article class="about-description change-order row no-gutters justify-content-center">
        <div class="opportunities-title hidden-sm-down col-11">
          <h2 class="content-title">${data.staff.jose.nombre}</h2>
          <h3 class="content-title team-title-cargo">${data.staff.jose.cargo}</h3>
        </div>
        <p class="about-parrafo col-11">
          ${data.staff.jose.bio_parrafo1} 
        </p>
        <p class="about-parrafo col-11">
          ${data.staff.jose.bio_parrafo2}
        </p>
        <div class="col-11 team-principal-inner-container">
          <a href="${data.staff.jose.linkedin}" target="_blank" class="red-social linkedin rounded-circle">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:${data.staff.jose.correo}" class="red-social mail rounded-circle">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
        </div>
      </article>
      <article class="row no-gutters justify-content-around services-item-picture">
        <div class="opportunities-title col-11 hidden-md-up">
          <h2 class="content-title">${data.staff.jose.nombre}</h2>
          <h3 class="content-title team-title-cargo">${data.staff.jose.cargo}</h3>
        </div>
        <picture class="col-11">
          <img class="d-block img-fluid" src="${data.staff.jose.avatar}" alt="" id="about-why-img">
        </picture>
      </article>
    </section>`,
  victor: yo`
    <section class="about-content row no-gutters justify-content-center">
      <article class="about-description row no-gutters justify-content-center">
        <div class="opportunities-title hidden-sm-down col-11">
          <h2 class="content-title">${data.staff.victor.nombre}</h2>
          <h3 class="content-title team-title-cargo">${data.staff.victor.cargo}</h3>
        </div>
        <p class="about-parrafo col-11">
          ${data.staff.victor.bio_parrafo1} 
        </p>
        <p class="about-parrafo col-11">
          ${data.staff.victor.bio_parrafo2}
        </p>
        <div class="col-11 team-principal-inner-container">
          <a href="${data.staff.victor.linkedin}" target="_blank" class="red-social linkedin rounded-circle">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:${data.staff.victor.correo}" class="red-social mail rounded-circle">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
        </div>
      </article>
      <article class="row no-gutters justify-content-around services-item-picture">
        <div class="opportunities-title col-11 hidden-md-up">
          <h2 class="content-title">${data.staff.victor.nombre}</h2>
          <h3 class="content-title team-title-cargo">${data.staff.victor.cargo}</h3>
        </div>
        <picture class="col-11">
          <img class="d-block img-fluid" src="${data.staff.victor.avatar}" alt="" id="about-why-img">
        </picture>
      </article>
    </section>`,
  tim: yo`
    <section class="about-content row no-gutters justify-content-center">
      <article class="about-description change-order row no-gutters justify-content-center">
        <div class="opportunities-title hidden-sm-down col-11">
          <h2 class="content-title">${data.staff.tim.nombre}</h2>
          <h3 class="content-title team-title-cargo">${data.staff.tim.cargo}</h3>
        </div>
        <p class="about-parrafo col-11">
          ${data.staff.tim.bio_parrafo1} 
        </p>
        <p class="about-parrafo col-11">
          ${data.staff.tim.bio_parrafo2}
        </p>
        <div class="col-11 team-principal-inner-container">
          <a href="${data.staff.tim.linkedin}" target="_blank" class="red-social linkedin rounded-circle">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:${data.staff.tim.correo}" class="red-social mail rounded-circle">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
        </div>
      </article>
      <article class="row no-gutters justify-content-around services-item-picture">
        <div class="opportunities-title col-11 hidden-md-up">
          <h2 class="content-title">${data.staff.tim.nombre}</h2>
          <h3 class="content-title team-title-cargo">${data.staff.tim.cargo}</h3>
        </div>
        <picture class="col-11">
          <img class="d-block img-fluid" src="${data.staff.tim.avatar}" alt="" id="about-why-img">
        </picture>
      </article>
    </section>`,
  xavier: yo`
    <section class="about-content row no-gutters justify-content-center">
      <article class="about-description row no-gutters justify-content-center">
        <div class="opportunities-title hidden-sm-down col-11">
          <h2 class="content-title">${data.staff.xavier.nombre}</h2>
          <h3 class="content-title team-title-cargo">${data.staff.xavier.cargo}</h3>
        </div>
        <p class="about-parrafo col-11">
          ${data.staff.xavier.bio_parrafo1} 
        </p>
        <p class="about-parrafo col-11">
          ${data.staff.xavier.bio_parrafo2}
        </p>
        <p class="about-parrafo col-11">
          ${data.staff.xavier.bio_parrafo3}
        </p>
        <div class="col-11 team-principal-inner-container">
          <a href="${data.staff.xavier.linkedin}" target="_blank" class="red-social linkedin rounded-circle">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:${data.staff.xavier.correo}" class="red-social mail rounded-circle">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
        </div>
      </article>
      <article class="row no-gutters justify-content-around services-item-picture">
        <div class="opportunities-title col-11 hidden-md-up">
          <h2 class="content-title">${data.staff.xavier.nombre}</h2>
          <h3 class="content-title team-title-cargo">${data.staff.xavier.cargo}</h3>
        </div>
        <picture class="col-11">
          <img class="d-block img-fluid" src="${data.staff.xavier.avatar}" alt="" id="about-why-img">
        </picture>
      </article>
    </section>`
}
