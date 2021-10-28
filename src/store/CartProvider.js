import React from 'react'
import { CartContext } from './cart-context'


export const CartProvider = ({children}) => {

    const handlerAddItem = (item) => {}
    const handlerRemoveItem = (id) =>{}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: handlerAddItem,
        removeItem: handlerRemoveItem
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}
