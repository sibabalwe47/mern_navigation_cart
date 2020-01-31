import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    INCREASE_QUANITY,
    DECREASE_QUANTITY,
    SELECTED_PRODUCTS,
    UNSELECT_PRODUCT
} from './types'

import axios from 'axios'


export const addProduct = id => async dispatch => {
    try {
        dispatch({
            type: ADD_PRODUCT,
            payload: {
                id,
                qty: 1
            }
        })
    } catch (error) {
        dispatch({
            type: REMOVE_PRODUCT
        })
    }
}


export const removeProduct = id => async dispatch => {
    dispatch({
        type: UNSELECT_PRODUCT,
        payload: id
    })
}

export const incrementQuantity = (id, qty) => async dispatch => {
    console.log(id, qty)

    // dispatch({
    //     type: INCREASE_QUANITY,
    //     payload: id
    // })
}

export const decrementQuantity = id => async dispatch => {
    dispatch({
        type: DECREASE_QUANTITY,
        payload: id
    })
}

export const listedProducts = products => async dispatch => {
    dispatch({
        type: SELECTED_PRODUCTS,
        payload: products
    })
    console.log(products)
}