import React from 'react'

import profil from '../../assets/IMG_1145-(1).png'
import './Header.scss'
import variables from '../../variables.js'
import Variables from '../../variables.js'
 
class Header extends React.Component {
  
    render() {
        return(
            <nav className="navbar navbar-light navbar-fixed-top head" >
                
                <input type="checkbox" id="in-hide" style={{display:"none"}}/>
                <label className="lab" htmlFor="in-hide"><i className="fa fa-search hide"></i></label>
                
                <div className="form-inline ml-auto searching">
                        <div className="form-group has-search ">
                        <form action="">
                            <button type="submit" className="search_btn"><i className="fa fa-search"></i></button>
                            <input type="text" placeholder="Rechercher" name="search"/>
                        </form>
                        </div>
                        <div className="message">
                            {Variables.MENU_WELCOME}
                        </div> 
                        <a className="navbar-brand logo" href="#">
                            <img src={profil} width="50" height="50" alt=""/>
                        </a>        
                    </div>

            </nav>
        )
    }
}

export default Header