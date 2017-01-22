'use strict'

import yo from 'yo-yo'
import empty from 'empty-element'

var header = document.getElementById('banner')

var el = yo `
<div class="banner-container">
    <div class="home-header hidden-xs-down">
        <picture class="home-picture">
            <img src="http://lorempixel.com/1440/500/city/" alt="" class="home-picture-img">
            <div class="home-picture-contenido row align-items-center no-gutters">
                <h2 class="home-picture-title col-12">
                    Innovations diversified investment solutions
                </h2>
                <p class="home-picture-parrafo col-12">
                    Carlisle is a leading, highly diversified global investment management firm,
                    Carlisle applies its deep experience and specialized expertise across a range of investment
                    strategies provate equity, credit, liquid markets and traditional fixed income - on behalf of
                    investors and private clients wordwide.
                </p>
                <a href="#" class="home-picture-boton col-4">
                    Learn More
                </a>
            </div>
        </picture>
    </div>
    <div class="home-bg-bottom hidden-xs-down"></div>
</div>`

export default () => {
  empty(header).appendChild(el)
}
