import React from 'react'
import './Button.scss'

function Button({text,color,image,size,funct}) {
    return(
        <button className="bttn" style={{backgroundColor:{color}}} > 
            {text}
            <img src={image} alt=""/>
        </button>
    )
}

export default Button