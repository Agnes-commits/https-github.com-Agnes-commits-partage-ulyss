import React from 'react'
import './Input.scss'

const Input = ({text,type, value, func}) => {
    return(
        <fieldset>
            <legend> {text} </legend>
            <input type={type} value={value}/>
        </fieldset>
    )
}

export default Input