import React from 'react'
import ReactDOM from 'react-dom'

import { Backdrop } from './Backdrop'
import classes from './Modal.module.css'
import { ModalOverlay } from './ModalOverlay'

const portElement = document.getElementById('overlay')

export const Modal = ({children}) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portElement)}   
        </>
    )
}
