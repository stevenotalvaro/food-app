import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../store/cart-context'
import classes from './MealItem.module.css'
import { MealItemForm } from './MealItemForm'

export const MealItem = ({id, name, description, price}) => {

    const {addItem} = useContext(CartContext)

    const price2 = `$${price.toFixed(2)}`

    const handlerAddCart = amount => {
        addItem({
            id,
            name,
            amount,
            price

        })
    }
        
    return (
        <li className={classes.meal}>
           <div>
               <h3>{name}</h3>
               <div className={classes.description}>{description}</div>
               <div  className={classes.price}>{price2}</div>
           </div>
           <div>
               <MealItemForm onAddToCart={handlerAddCart} />
           </div>
        </li>
    )
}
