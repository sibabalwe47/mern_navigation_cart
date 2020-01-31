import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS
} from '../actions/types'


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: true,
    user: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action;




    switch (type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)

            return {

                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }


        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                isLoading: true
            }

        default:
            return state
    }
}