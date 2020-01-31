import React from 'react'
import HeroSmall from '../components/Layouts/HeroSmall'
import CheckoutList from '../components/Cart/CheckoutList'

const Cart = () => {
    return (
        <div>
            <HeroSmall heading={'Your Cart'} />
            <CheckoutList />
        </div>
    )
}

export default Cart;