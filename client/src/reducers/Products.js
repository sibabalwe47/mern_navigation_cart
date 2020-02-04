import {
    FETCH_ALL_PRODUCTS_ERROR,
    FETCH_ALL_PROUDCTS
} from '../actions/types'


const initialState = {
    products: [],
    errors: [],
    isLoaded: false
}


export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {

        case FETCH_ALL_PROUDCTS:
            return {
                ...state,
                products: payload,
                errors: null,
                isLoaded: true
            }


        case FETCH_ALL_PROUDCTS: 
            return {
                ...state,
                products: null,
                errors: payload,
                isLoaded: false
            }

        default: 
            return state
    }
}