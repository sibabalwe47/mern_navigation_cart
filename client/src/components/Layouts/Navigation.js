import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



const Navigation = ({ cart }) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <Link class="navbar-brand" to="/">
               Logo
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse">
                <span class="oi oi-menu"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><Link to="/" class="nav-link">Home</Link></li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/shop">Shop</Link>
                        {/* <div class="dropdown-menu" aria-labelledby="dropdown04">
                            <Link class="dropdown-item" to="shop.html">Shop</Link>
                            <Link class="dropdown-item" to="product-single.html">Single Product</Link>
                            <Link class="dropdown-item" to="cart.html">Cart</Link>
                            <Link class="dropdown-item" to="checkout.html">Checkout</Link>
                        </div> */}
                    </li>
                    <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
                    <li class="nav-item"><Link to="/blog" class="nav-link">Blog</Link></li>
                    <li class="nav-item"><Link to="/contact" class="nav-link">Contact</Link></li>
                    <li class="nav-item cta cta-colored"><Link to="/cart" class="nav-link cart-link"><span class="icon-shopping_cart"></span>[{cart ? cart.length : '0'}]</Link></li>

                </ul>
            </div>
        </div>
    </nav>
    )
}


Navigation.propTypes = {
    cart: PropTypes.array.isRequired
}


const mapStateToProps = state => ({
    cart: state.Cart.productsIds
})


export default connect(mapStateToProps, null)(Navigation);