import { combineReducers } from 'redux'
import Products from './Products'
import Auth from './Auth'
import Cart from './Cart'
import Order from './Order'
const rootReducers = combineReducers({
    Products,
    Auth,
    Cart,
    Order
})

export default rootReducers