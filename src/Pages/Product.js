import React from 'react'

import HeroSmall from '../components/Layouts/HeroSmall'
import SingleProduct from '../components/Product/SingleProduct'



const Product = () => {
    return (
        <div>
            <HeroSmall heading={'Beef Sausage'} />
            <SingleProduct />
        </div>
    )
}


export default Product