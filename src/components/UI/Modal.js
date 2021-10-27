import React from 'react'
import ReactDOM from 'react-dom'

import { Backdrop } from './Backdrop'

import { ModalOverlay } from './ModalOverlay'

const portElement = document.getElementById('overlay')

export const Modal = ({children, handlerCartHide}) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop handlerCartHide={handlerCartHide} />, portElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portElement)}   
        </>
    )
}
