import React from 'react'
import classes from './Modal.module.css'

export const Backdrop = ({handlerCartHide}) => {
    return (
        <div onClick={handlerCartHide} className={classes.backdrop}>
            
        </div>
    )
}
