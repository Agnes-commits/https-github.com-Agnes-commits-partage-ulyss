import React from 'react'

import deux from '../../assets/ab-benin.png'
import un from '../../assets/citebj_blanc.png'
import './Footer.scss'

const Footer = () => {
    return(
        <footer>
            <div className="left">
                Copyright © Cite.bj <img src={un} alt= "citedotbj_logo"/> ＆ Conçu et maintenu par <img src={deux} alt= "abbenin_logo"/>
            </div>
            <div className="right">
                <p>FAQ</p>
                <p>Conditions d'utilisation</p>
                <p className="last">Données personnelles</p>
            </div>
        </footer>
    )
}

export default Footer