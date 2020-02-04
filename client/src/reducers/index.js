import { combineReducers } from 'redux'
import Cart from './Cart'
import Products from './Products'

const rootReducer = combineReducers({
    Cart,
    Products
})


export default rootReducer