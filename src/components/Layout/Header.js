import React from 'react'

import foodImage from '../../assets/food.jpg'
import { ButtonHeader } from './ButtonHeader'
import classes from './Header.module.css'
export const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>Menu</h1>
                <ButtonHeader />
            </header> 
            <div className={classes['main-image']}>
                <img src={foodImage} alt="food" />
            </div>
        </>
    )
}
