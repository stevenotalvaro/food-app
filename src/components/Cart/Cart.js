import React from 'react'
import { Modal } from '../UI/Modal'
import classes from './Cart.module.css'
export const Cart = ({handlerCartHide}) => {
    const cartItems = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}]

    return (
        <Modal handlerCartHide={handlerCartHide}>
            <ul className={classes['cart-items']}>
                {cartItems.map(item => <li>{item.name}</li>)}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.65</span>
            </div>
            <div className={classes.actions}>
                <button onClick={handlerCartHide} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
