import React, { useReducer } from 'react'
import { CartContext } from './cart-context'

const initialState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state = initialState, action) =>{

    switch (action.type) {
        case 'ADD':
            return{
                ...state,
                items: [...action.payload],
                totalAmount: state.totalAmount + action.payload.price * action.payload.amount
            }
        case 'REMOVE':
            break
        default:
            return state
    }     
}

export const CartProvider = ({children}) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState)

    const handlerAddItem = (item) => {
        dispatchCartAction({type: 'ADD', payload: item})
    }
    const handlerRemoveItem = (id) =>{
        dispatchCartAction({type: 'REMOVE', payload: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handlerAddItem,
        removeItem: handlerRemoveItem
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}
