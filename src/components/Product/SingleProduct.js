import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/product-1.jpg'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addProduct, incrementQuantity, decrementQuantity } from '../../actions/Cart'


const SingleProduct = ({ product, addProduct, incrementQuantity, decrementQuantity }) => {




    const onClick = (e, id) => {
        addProduct(id)

        e.preventDefault()
    }

    let productQuantity = 1

    const onDecrease = id => {
        decrementQuantity(id)
    }

    const onIncrease = id => {
        incrementQuantity(id)
        productQuantity++
    }

    return (
        <section class="ftco-section bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mb-5 ">
                        <a href="images/menu-2.jpg" class="image-popup"><img src={product.image} class="img-fluid" alt="Colorlib Template" /></a>
                    </div>
                    <div class="col-lg-6 product-details pl-md-5 ">
                        <h3>{product.name}</h3>
                        <p class="price"><span>R {product.price}</span></p>
                        <p>{product.description}</p>
                        <div class="row mt-4">
                            <div class="w-100"></div>
                            <div class="input-group col-md-6 d-flex mb-3">
                                <span class="input-group-btn mr-2">
                                    <button onClick={(e) => onDecrease(product.id)} type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
                                        <i class="ion-ios-remove"></i>
                                    </button>
                                </span>
                                <div type="text" id="quantity" name="quantity" class="form-control input-number" >{product.qty}</div>
                                <span class="input-group-btn ml-2">
                                    <button onClick={(e) => onIncrease(product.id)} type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                                        <i class="ion-ios-add"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <p><Link to="#" onClick={(e) => onClick(e, product.id)} class="btn btn-primary py-3 px-5">Add to Cart</Link></p>
                    </div>
                </div>
            </div>
        </section >
    )
}

SingleProduct.propTypes = {
    product: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired,
    incrementQuantity: PropTypes.func.isRequired,
    decrementQuantity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    product: state.Products.product
})

export default connect(mapStateToProps, {
    addProduct,
    incrementQuantity,
    decrementQuantity
})(SingleProduct)