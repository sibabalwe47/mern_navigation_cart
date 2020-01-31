import {
    PLACE_ORDER,
    PLACE_ORDER_ERROR
} from '../actions/types'


const initialState = {
    user: null,
    products: [],
    notification: false,
    storeEmail: false,
}


export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {


        case PLACE_ORDER:
            return {
                ...state,
                user: payload.user,
                notification: true,
                storeEmail: true
            }

        case PLACE_ORDER_ERROR:
            return {
                ...state,
                user: null,
                notification: null,
                storeEmail: null,
                products: null
            }

        default:
            return state
    }
}