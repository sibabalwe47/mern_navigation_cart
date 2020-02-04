import React from 'react'
import { Link } from 'react-router-dom'


const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-list">
                <div className="top-area">
                    <div className="close-btn">x</div>
                </div>
                <div className="products">
                    <Link to="/products/1556dff7578"  className="product"></Link>
                    <Link to="/products/1556dff7578"  className="product"></Link>
                    <Link to="/products/1556dff7578"  className="product"></Link>
                </div>
                <div className="checkout-area">
                    <button className="btn checkout">Checkout</button>
                </div>
            </div>
        </div>
    )
}


export default Cart;