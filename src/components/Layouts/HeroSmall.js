import React from 'react'
import BackgroundImage from '../../assets/images/bg_6.jpg'
import PropTypes from 'prop-types'


const HeroSmall = ({ heading }) => {

    let urlPath = window.location.pathname.toString();
    let heroClass = '';
    console.log(urlPath.toString())


    switch (urlPath) {
        case "/shop":
            heroClass = 'shop'
            break;

        case "/about":
            heroClass = 'about'
            break;

        case "/blog":
            heroClass = 'blog'
            break;

        case "/contact":
            heroClass = 'contact'
            break;

        case "/cart":
            heroClass = 'cart'
            break;

        case "/checkout":
            heroClass = 'checkout'
            break;

        default:
            heroClass = 'default'

    }

    return (
        <div class={`hero-wrap hero-bread ${heroClass}`} style={{ BackgroundImage: `url(${BackgroundImage})` }}>
            <div className="overlay"></div>
            <div class="container">
                <div class="row no-gutters slider-text align-items-center justify-content-center">
                    <div class="col-md-9 text-center">
                        <h1 class="mb-0 bread" style={{ color: '#fff', fontWeight: '500' }}>{heading}</h1>
                        {/* <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Product</span></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


HeroSmall.propTypes = {
    heading: PropTypes.string.isRequired
}

export default HeroSmall