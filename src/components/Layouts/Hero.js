import React from 'react'
import BackgroundImage from '../../assets/images/bg_1.jpeg'

const Hero = () => {

    return (
        <div class="hero-wrap home js-fullheight" style={{
            BackgroundImage: `url(${BackgroundImage}) !important`,
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // height: '100vh'
        }} >
            <div class="overlay"></div>
            <div class="container">
                <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                    {/* <!--        	<h3 class="v">Modist - Time to get dress</h3>--> */}
                    <h3 class="vr" style={{ color: '#fff' }}>Since - 1985</h3>
                    <div class="col-md-11 text-center vertical-align">
                        <h1>Connocks Butchery</h1>
                        <h2><span>The people's butchery</span></h2>
                    </div>
                    {/* <div class="mouse">
                        <a href="#" class="mouse-icon">
                            <div class="mouse-wheel"><span class="ion-ios-arrow-down"></span></div>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}


export default Hero