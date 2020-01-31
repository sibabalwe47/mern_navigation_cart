import React from 'react'

import HeroSmall from '../components/Layouts/HeroSmall'
import WhyUs from '../components/Utils/WhyUs'
import Services from '../components/Services/Service'

const About = () => {
    return (
        <div>
            <HeroSmall heading={'about'} />
            <WhyUs />
            <Services />
        </div>
    )
}


export default About