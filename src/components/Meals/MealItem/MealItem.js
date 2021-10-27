import React from 'react'
import classes from './MealItem.module.css'
import { MealItemForm } from './MealItemForm'

export const MealItem = ({name, description, price}) => {
    const price2 = `$${price.toFixed(2)}`
    return (
        <li className={classes.meal}>
           <div>
               <h3>{name}</h3>
               <div className={classes.description}>{description}</div>
               <div  className={classes.price}>{price2}</div>
           </div>
           <div>
               <MealItemForm />
           </div>
        </li>
    )
}
