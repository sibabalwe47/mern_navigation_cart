import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addProduct } from '../../actions/Cart'
import PropTypes from 'prop-types'


//import Product1 from './Linkssets/images/product-1.jpg'

import SectionHeader from '../Utils/SectionHeader'


const Products = ({ products, addProduct }) => {

    const onClick = (e, id) => {

        // PREVENT DEFAULT

        e.preventDefault()

        // ADD PRODUCT TO CART

        addProduct(id)
    }


    return (
        <section class="ftco-section">
            <div class="container">
                {/* <SectionHeader subheading={'Jan Specials'} /> */}
                <div class="row">
                    {products.map(pro => (
                        <div class="col-sm col-md-6 col-lg-3">
                            <div class="product">
                                <Link to={`/product/${pro.id}`} class="img-prod"><img class="img-fluid" src={pro.image} alt="Colorlib Template" />
                                </Link>
                                <div class="text py-3 px-3">
                                    <h3><Link href="#">{pro.name}</Link></h3>
                                    <div class="d-flex">
                                        <div class="pricing">
                                            <p class="price"><span class="price-sale">R {pro.price}</span></p>
                                        </div>

                                    </div>
                                    <hr />
                                    <p class="bottom-area d-flex">
                                        <Link to="" class="add-to-cart" onClick={(e) => onClick(e, pro.id)}><span>Add to cart <i class="ion-ios-add ml-1"></i></span></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}


Products.propTypes = {
    addProduct: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    products: state.Products.products
})

export default connect(mapStateToProps, { addProduct })(withRouter(Products))