import React, { useEffect, useState } from 'react'
import Image from '../../assets/images/product-3.jpg'
import CheckoutTotal from './CheckoutTotal'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeProduct, listedProducts, incrementQuantity } from '../../actions/Cart'

const CheckoutList = ({ products, productIds, removeProduct, listedProducts, selectedProducts }) => {

    const [quantityData, setQuantity] = useState({
        qty: 1
    })

    const { qty } = quantityData

    const onChange = (e, id, qty) => {
        setQuantity({ ...quantityData, [e.target.name]: e.target.value });
        //incrementQuantity(id, qty)
        //console.log(id, qty)
    }

    useEffect(() => {
        listedProductsArr()
    }, [])

    const removeItem = (e, id) => {
        removeProduct(id);
    }

    // listed products

    let productsToList = [];

    const listedProductsArr = () => {

        if (products.length > 0 && productIds.length > 0) {
            products.forEach(p => {
                productIds.forEach(i => {
                    if (p.id == i) {
                        productsToList.push(p)
                    }
                })
            })
        }
        listedProducts(productsToList)
    }


    return (
        <section class="ftco-section ftco-cart">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 ">
                        <div class="cart-list">
                            <table class="table">
                                <thead class="thead-primary">
                                    <tr class="text-center">
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedProducts !== null && selectedProducts.length > 0 ? selectedProducts.map(prod => (
                                        <tr class="text-center">
                                            <td class="product-remove"><Link onClick={(e) => removeItem(e, prod.id)} href="#"><span class="ion-ios-close"></span></Link></td>

                                            <td class="image-prod"><div class="img" style={{ backgroundImage: `url(${prod.image})` }}></div></td>

                                            <td class="product-name">
                                                <h3>{prod.name}</h3>
                                            </td>

                                            <td class="price">R {prod.price}</td>

                                            <td class="quantity">
                                                <div class="input-group">
                                                    <input type="text" name="qty" value={qty} onChange={(e) => { onChange(e, prod.id, qty) }} class="quantity form-control input-number" min="1" max="100" />
                                                </div>
                                            </td>

                                            <td class="total">R {typeof qty !== NaN && qty > 0 ? (parseFloat(prod.price) * parseInt(qty)).toFixed(2) : ' 0'}</td>
                                        </tr>
                                    )) : (<p style={{
                                        textAlign: 'center',
                                        marginTop: '30px'
                                    }}>Your cart is empty, continue shopping <Link to="/shop" style={{ color: '#ff2d20' }}>here</Link>.</p>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {selectedProducts !== null && selectedProducts.length ? (<CheckoutTotal />) : null}

            </div>
        </section>
    )
}

CheckoutList.propTypes = {
    removeProduct: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    productIds: PropTypes.array.isRequired,
    listedProducts: PropTypes.func.isRequired,
    selectedProducts: PropTypes.array.isRequired,
    incrementQuantity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: state.Products.products,
    productIds: state.Cart.productIds,
    selectedProducts: state.Cart.selectedProducts
})

export default connect(mapStateToProps, { removeProduct, listedProducts, incrementQuantity })(CheckoutList)