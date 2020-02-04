import axios from 'axios'
import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './types'
import { connect } from 'react-redux'



export const addToCart = product => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: product
    })
    //console.log(product)
}