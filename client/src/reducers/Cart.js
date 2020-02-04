import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types'


const initialState = {
    productsIds: []
}


export default function(state = initialState, action) {

    const { type, payload } = action
    let selectedProducts  = state.productsIds;

    switch(type) {

        case ADD_TO_CART: 

            console.log(payload)
            selectedProducts.push(payload._id)

            const filteredProducts = [...new Set(selectedProducts)]

            return {
                ...state, 
                productsIds: filteredProducts
            }

        case REMOVE_FROM_CART: 
            return {
                ...state
            }

        default:
            return state
    }
}