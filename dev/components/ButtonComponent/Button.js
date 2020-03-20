import React from 'react'
import './Button.scss'

function Button({text,color,position,image,size,funct}) {
    return(
        <button className="bttn" style={{backgroundColor:color, float:position,}} > 
            {text}
            <img src={image} style={{width:"40px"}} halt=""/>
        </button>
    )
}

export default Button