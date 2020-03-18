import React from 'react'

import logo_un from '../../assets/logo_participez_red.png'
import logo_deux from '../../assets/citebj_blanc.png'
import './Header.scss'
import variables from '../../variables.js'
 
class Header extends React.Component {
  
    render() {
        return(
            <nav className="navbar navbar-light navbar-fixed-top head" >
               <a className="navbar-brand" href="#">
                    <img src={logo_un} width="60px" height="60px" alt=""/>
                </a>
                <div className="form-inline my-2 my-lg-0 searching">
                    <div className="form-group has-search ">
                    <form action="">
                        <button type="submit" className="search_btn"><i className="fa fa-search"></i></button>
                        <input type="text" placeholder="Rechercher" name="search"/>
                    </form>
                    </div>
                    <div className="nav-button">
                        <button  className="my-2 my-sm-0">
                            {variables.MENU_SIGNUP}
                        </button>
                    </div>
                    <div className="nav-button">
                        <button  className="my-2 my-sm-0">
                        {variables.MENU_SIGNIN}
                        </button>
                    </div> 
                    <a className="navbar-brand logo" href="#">
                         <img src={logo_deux} width="50" height="50" alt=""/>
                    </a>        
                </div>
            </nav>
        )
    }
}

export default Header