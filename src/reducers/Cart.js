import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    INCREASE_QUANITY,
    SELECTED_PRODUCTS,
    UNSELECT_PRODUCT
} from '../actions/types'

const initialState = {
    productIds: [],
    selectedProducts: null,
    total: null,
}


export default function (state = initialState, action) {
    const { type, payload } = action

    let productIds = state.productIds

    switch (type) {

        case ADD_PRODUCT:



            /*
                Had issues with repeating product ids in the which would give problems at checkout/cart level. Use this resource: 
                https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates
            */
            productIds.push(payload.id)

            const filteredProductIds = [...(new Set(productIds))]

            return {
                ...state,
                productIds: filteredProductIds
            }

        case UNSELECT_PRODUCT:
            let selected = state.selectedProducts
            console.log(selected, payload)
            let newSelected = selected.filter(sel => sel.id !== payload)

            return {
                ...state,
                selectedProducts: newSelected
            }

        case REMOVE_PRODUCT:
            return state

        case INCREASE_QUANITY:
            let filteredProduct = productIds.filter(prod => {
                if (prod.id === payload) {
                    prod.qty += 1
                }
            })
            //filteredProduct.qty += 1
            console.log(filteredProduct)

            return {
                ...state
            }


        case SELECTED_PRODUCTS:
            return {
                ...state,
                selectedProducts: payload
            }



        default:
            return state;
    }
}