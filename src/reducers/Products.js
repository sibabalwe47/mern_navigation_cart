//  Action types

import {
    FETCH_ALL_PRODUCTS,
    FETCH_ALL_PRODUCTS_ERROR,
    FETCH_SINGLE_PRODUCT,
    FETCH_SINGLE_PRODUCT_ERROR,
    INCREASE_QUANITY,
    DECREASE_QUANTITY
} from '../actions/types'

// Init state

const initialState = {
    product: {
        id: '5e270e20aade641374eeadb2',
        name: 'Beef',
        image: require('../assets/images/product-1.jpg'),
        price: '59.95',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        qty: 1
    },
    products: [
        {
            id: '5e270e20aade641374eeadb1',
            name: 'Beef',
            image: require('../assets/images/product-1.jpg'),
            price: '59.95',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            qty: 1
        },
        {
            id: '5e270e20aade641374eeadb2',
            name: 'Beef',
            image: require('../assets/images/product-1.jpg'),
            price: '59.95',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            qty: 1
        },
        {
            id: '5e270e20aade641374eeadb3',
            name: 'Beef',
            image: require('../assets/images/product-1.jpg'),
            price: '59.95',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            qty: 1
        },
        {
            id: '5e270e20aade641374eeadb4',
            name: 'Beef',
            image: require('../assets/images/product-1.jpg'),
            price: '59.95',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            qty: 1
        },
        {
            id: '5e270e20aade641374eeadb5',
            name: 'Beef',
            image: require('../assets/images/product-1.jpg'),
            price: '59.95',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            qty: 1
        },
        {
            id: '5e270e20aade641374eeadb6',
            name: 'Beef',
            image: require('../assets/images/product-1.jpg'),
            price: '59.95',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            qty: 1
        },
        {
            id: '5e270e20aade641374eeadb7',
            name: 'Beef',
            image: require('../assets/images/product-1.jpg'),
            price: '59.95',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            qty: 1
        },
        {
            id: '5e270e20aade641374eeadb8',
            name: 'Beef',
            image: require('../assets/images/product-1.jpg'),
            price: '59.95',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            qty: 1
        }
    ]
}


export default function (state = initialState, action) {
    const { type, payload } = action;


    switch (type) {
        case FETCH_ALL_PRODUCTS:
            return {
                ...state,
                //products: payload
            }

        case FETCH_ALL_PRODUCTS_ERROR:
            return {
                ...state,
                products: null
            }

        case FETCH_SINGLE_PRODUCT:
            return {
                ...state,
                product: payload
            }

        case FETCH_SINGLE_PRODUCT_ERROR:
            return {
                ...state,
                product: null
            }

        // case INCREASE_QUANITY:

        //     let product = state.products.filter(pro => pro.id.toString() === payload)[0]
        //     const newProduct = {
        //         ...product,
        //         qty: state.product.qty++
        //     }
        //     console.log(product)


        //     return {
        //         ...state,
        //         product: newProduct
        //     }

        // case DECREASE_QUANTITY:
        //     return state

        default:
            return state;
    }
}