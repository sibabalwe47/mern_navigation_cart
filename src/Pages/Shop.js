import React from 'react'


import HeroSmall from '../components/Layouts/HeroSmall'
import Product from '../components/Product/Products'

const Shop = () => {
    return (
        <div>
            <HeroSmall heading={'Meat Products'} />
            <Product />
            <Product />

        </div>
    )
}


export default Shop