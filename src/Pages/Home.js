import React from 'react'

import Hero from '../components/Layouts/Hero'
import Products from '../components/Product/Products'
import WhyUs from '../components/Utils/WhyUs'
import InfoBlock from '../components/Utils/InfoBlock'
import BlogPanel from '../components/Blog/BlogPanel'
import Services from '../components/Services/Service'


const Home = () => {
    return (
        <div>
            <Hero />
            <Products />
            <WhyUs />
            <Products />
            {/* <InfoBlock /> */}
            <BlogPanel />
            <Services />

        </div>
    )
}


export default Home