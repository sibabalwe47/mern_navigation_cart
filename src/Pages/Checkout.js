import React from 'react'
import HeroSmall from '../components/Layouts/HeroSmall'
import CheckoutForm from '../components/Forms/CheckoutForm'

const Checkout = () => {
    return (
        <div>
            <HeroSmall heading={'Checkout'} />
            <CheckoutForm />
        </div>
    )
}

export default Checkout;