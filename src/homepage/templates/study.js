'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'

var study = document.getElementById('study')

var el = yo `
<div class="study-container">
    <div class="row no-gutters ">
        <div class="col-12 col-md-8 col-lg-7 col-xl-6">
            <h2 class="content-title">
                Case Study
            </h2>
        </div>
    </div>
    <div class="row no-gutters justify-content-center study-videos">
        <div class="col-12 col-md-5 study-video">
            <div class="row no-gutters justify-content-center">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe 
                        class="embed-responsive-item" 
                        src="https://www.youtube-nocookie.com/embed/WEDIj9JBTC8?rel=0&amp;controls=0" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="study-boton col-4 col-sm-5 col-xl-9">
                    <a href="#" class="study-boton-link">View case study</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-5 study-video">
            <div class="row no-gutters justify-content-center">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe 
                        class="embed-responsive-item" 
                        src="https://www.youtube-nocookie.com/embed/WEDIj9JBTC8?rel=0&amp;controls=0" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="study-boton col-4 col-sm-5 col-xl-9">
                    <a href="#" class="study-boton-link">View case study</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-5 study-video">
            <div class="row no-gutters justify-content-center">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe 
                        class="embed-responsive-item" 
                        src="https://www.youtube-nocookie.com/embed/WEDIj9JBTC8?rel=0&amp;controls=0" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="study-boton col-4 col-sm-5 col-xl-9">
                    <a href="#" class="study-boton-link">View case study</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-5 study-video">
            <div class="row no-gutters justify-content-center">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe 
                        class="embed-responsive-item" 
                        src="https://www.youtube-nocookie.com/embed/WEDIj9JBTC8?rel=0&amp;controls=0" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="study-boton col-4 col-sm-5 col-xl-9">
                    <a href="#" class="study-boton-link">View case study</a>
                </div>
            </div>
        </div>
    </div>
</div>
`

export default () => {
  empty(study).appendChild(el)
}
