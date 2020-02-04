import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/Cart'



const Product = ({data, addToCart}) => {
    return(
        <div className="col-md-3">
            <Link to={`/product/${data._id}`} className="product" onClick={() => addToCart(data)}>
                <p>{data.name}</p>
            </Link>
        </div>
    )
}


Product.propTypes = {
    data: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
}



export default connect(null, {addToCart})(Product)