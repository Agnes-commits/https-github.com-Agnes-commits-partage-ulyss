import React from 'react'

import logo_un from '../../assets/logo_participez_red.png'
import logo_deux from '../../assets/citebj_blanc.png'
import variables from '../../variables.js'
import './Menu.scss'
import Variables from '../../variables.js'

class Menu extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand menu-deux justify-content-center" >
                <ul className="navbar-nav " >
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
                        <li className="i nav-item">
                            <a className="nav-link" href="#"><i className="fa fa-bell" style={{ color:"yellow" }} aria-hidden="true"></i></a>
                        </li>
                        <li className="i nav-item">
                            <a className="nav-link" href="#"><i className="fa fa-envelope" style={{ color:"yellow" }} aria-hidden="true"></i></a>
                        </li>
                </ul>
            </nav>
        )
    }
}

export default Menu