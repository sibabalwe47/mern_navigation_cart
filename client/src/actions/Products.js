import axios from 'axios'
import {
    FETCH_ALL_PRODUCTS_ERROR,
    FETCH_ALL_PROUDCTS
} from './types'




export const fetchAllProducts = () => async dispatch => {
    
    try {
        const req = await axios.get('/api/products')
        console.log(req.data)
        dispatch({
            type: FETCH_ALL_PROUDCTS,
            payload: req.data
        })
    } catch (error) {
        dispatch({
            type: FETCH_ALL_PRODUCTS_ERROR,
            payload: error.data
        })
    }
}


