import React from 'react'
import { MealItem } from '../Meals/MealItem/MealItem'
import classes from './Card.module.css'


export const Card = ({meals}) => {
    return (
        <div className={classes.card}>
            {meals.map(meal => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />)}
        </div>
    )
}
