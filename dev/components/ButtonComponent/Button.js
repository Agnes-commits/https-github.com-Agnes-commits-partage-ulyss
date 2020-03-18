import React from 'react'
import './Button.scss'

function Button({text,size,funct}) {
    return(
        <button className="bttn" > 
            {text}
        </button>
    )
}

export default Button