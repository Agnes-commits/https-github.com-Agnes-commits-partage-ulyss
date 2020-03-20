import React from 'react'
import './Titre.scss'

const Titre = ({titre}) => {
    return(
        <div className="titre">
            <h2>
                {titre}
            </h2>
            </div>
    )
}

export default Titre