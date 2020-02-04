import React from 'react'
import { connect }  from 'react-redux'
import PropTypes from 'prop-types'
import Product from './Product'


const Products = ({products, isLoaded}) => {

    return(
        <div className="section-wrapper container">
            <div className="row">
                {products !== null && isLoaded ? products.map(product => (
                    <Product data={product} />
                )): null}
            </div>
        </div>
    )
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    isLoaded: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    products: state.Products.products,
    isLoaded: state.Products
})

export default connect(mapStateToProps)(Products)