import React, { useRef, useState } from 'react'
import { Input } from '../../UI/Input'
import classes from './MealItemForm.module.css'

export const MealItemForm = ({onAddToCart}) => {
    const amountInputRef = useRef()
    const [amoutnIsValid, setAmoutnIsValid] = useState(true)
    const handlerSumbit = (e) =>{
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmoutnIsValid(false)
            return;
        } 

        onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form } onSubmit={handlerSumbit}>
            <Input ref={amountInputRef} label={"Amount"} input={{
                
                id: 'Amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
        }} />
            <button>+ Add</button>
            {!amoutnIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}
