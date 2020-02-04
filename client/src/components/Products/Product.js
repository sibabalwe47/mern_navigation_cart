import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



const Product = ({data}) => {
    return(
        <div className="col-md-3">
            <Link to={`/product/${data._id}`} className="product" onClick={() => console.log(data._id)}>
                <p>{data.name}</p>
            </Link>
        </div>
    )
}


Product.propTypes = {
    data: PropTypes.object.isRequired
}



export default Product