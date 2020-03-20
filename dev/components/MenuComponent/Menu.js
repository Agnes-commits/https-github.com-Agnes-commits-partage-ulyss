import React from 'react'

import logo from '../../assets/logo_participez_red.png'
import variables from '../../variables.js'
import './Menu.scss'
import Variables from '../../variables.js'

class Menu extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-fixed-top navbar-expand-lg menu-deux navbar-light" style={{zIndex:"1"}}>
            <a className="navbar-brand" href=""> <img src={logo} width="50" height="50" alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">{Variables.MENU_HOME}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{Variables.MENU_IDEA}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{Variables.MENU_PROJECT}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{Variables.MENU_STUDY}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{Variables.MENU_ACTUALITY}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{Variables.MENU_SETTING}</a>
                        </li>
                </ul>
            </div>
    </nav>
        )
    }
}

export default Menu

                        



