import React from 'react'

import deux from '../../assets/ab-benin.png'
import un from '../../assets/citebj_blanc.png'
import './Footer.scss'
 
const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="left col-12 col-md-5" >
                         Copyright © Cite.bj <img src={un} alt= ""/> ＆ Conçu et maintenu par <img src={deux} alt= ""/>  
                    </div>
                    <div className="right col-12 col-md-5 offset-md-2" >
                        <div>FAQ</div>
                        <div>Conditions d'utilisation</div>
                        <div className="last">Données personnelles</div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer