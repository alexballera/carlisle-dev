'use strict'

import yo from 'yo-yo'
import data from '../../../data'

module.exports = {
  template: yo `
    <div class="team-container">
        <div class="row no-gutters ">
            <div class="col-12 col-md-8 col-lg-7 col-xl-6">
                <h2 class="content-title">
                    Carlisle Team
                </h2>
            </div>
        </div>
        <div class="row no-gutters justify-content-center">
            <div class="col-12 col-xl-7 team-principal">
                <div class="row no-gutters justify-content-center">
                    <div class="col-10 col-lg-6 team-principal-avatar">
                        <img class="staff-miembro-img" src="http://lorempixel.com/500/500/people/" alt="">
                    </div>
                    <div class="col-12 col-lg-6 team-principal-info">
                        <div class="row no-gutters">
                            <div class="col-10 offset-1 team-principal-inner-container">
                                <h3 class="team-principal-title">Victor Haggelman</h3>
                            </div>
                            <div class="col-10 offset-1 team-principal-inner-container">
                                <a href="${data.staff.victor.linkedin}" target="_blank" class="red-social linkedin rounded-circle">
                                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="mailto:${data.staff.victor.correo}" class="red-social mail rounded-circle">
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div class="col-10 offset-1 team-principal-inner-container">
                                <p class="team-principal-bio">
                                    ${data.staff.victor.bio_parrafo1}
                                </p>
                                <a href="#" class="team-principal-boton">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-4 staff">
                <div class="row no-gutters team-staff justify-content-center">
                    <div class="col-5 team-staff-item">
                        <img class="staff-miembro-img" src="http://lorempixel.com/400/400/people/" alt="">
                        <p class="staff-miembro">
                            <span class="staff-miembro-nombre">José García</span>
                            <span class="staff-miembro-cargo">Chief Excecutive Officer</span>
                        </p>
                    </div>
                    <div class="col-5 team-staff-item">
                        <img class="staff-miembro-img" src="http://lorempixel.com/400/400/people/" alt="">
                        <p class="staff-miembro">
                            <span class="staff-miembro-nombre">Phillip Neuman</span>
                            <span class="staff-miembro-cargo">President</span>
                        </p>                                
                    </div>
                    <div class="col-5 team-staff-item">
                        <img class="staff-miembro-img" src="http://lorempixel.com/400/400/people/" alt="">
                        <p class="staff-miembro">
                            <span class="staff-miembro-nombre">Tim Mol</span>
                            <span class="staff-miembro-cargo">Chief Operating Officer</span>
                        </p>
                    </div>
                    <div class="col-5 team-staff-item">
                        <img class="staff-miembro-img" src="http://lorempixel.com/400/400/people/" alt="">
                        <p class="staff-miembro">
                            <span class="staff-miembro-nombre">Xavier Deu</span>
                            <span class="staff-miembro-cargo">Chief Marketing Officer</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>        
    </div>`
}
