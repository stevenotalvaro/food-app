import React from 'react'
import classes from './Modal.module.css'

export const ModalOverlay = ({children}) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    )
}
