import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'


const CheckoutTotal = ({ selectedProducts }) => {
    console.log(selectedProducts)

    let totalPrice = 0
    let qty = 0;

    if (selectedProducts !== null) {
        selectedProducts.forEach(s => {
            totalPrice += parseInt(s.price)
            qty += parseInt(s.qty)
        })
    }

    const delivery = 15



    return (
        <div class="row justify-content-end">
            <div class={`col ${window.location.pathname.toString() == '/cart' ? 'col-lg-5' : 'col-lg-12'} col-md-6 mt-5 cart-wrap `}>
                <div class="cart-total mb-3">
                    <h3>Cart Totals</h3>
                    <p class="d-flex">
                        <span>Subtotal</span>
                        <span>R {totalPrice}</span>
                    </p>
                    <p class="d-flex">
                        <span>Delivery</span>
                        <span>R {delivery}</span>
                    </p>
                    <hr />
                    <p class="d-flex total-price">
                        <span>Total</span>
                        <span>R {(totalPrice * qty) + delivery}</span>
                    </p>
                </div>
                <p class="text-center">
                    {window.location.pathname.toString() == '/cart' ? (<Link to="/checkout" class="btn btn-primary py-3 px-4">Proceed to Checkout</Link>) : null}
                </p>
            </div>
        </div>
    )
}


CheckoutTotal.propTypes = {
    selectedProducts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    selectedProducts: state.Cart.selectedProducts
})




export default connect(mapStateToProps)(CheckoutTotal)