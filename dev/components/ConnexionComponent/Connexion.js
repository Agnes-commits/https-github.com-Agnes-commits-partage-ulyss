import React from 'react'
import './Connexion.scss'
import im from '../../assets/connexion_.svg'
import Variables from '../../variables'
import Input from '../InputComponent/Input'
import Button from '../ButtonComponent/Button'

class Connexion extends React.Component {
    render(){
        return(
            <div className="mainContent" >
                <div className="card" >
                    <div className="row no-gutters">
                        <div className="col-12 col-md-5 deg">
                        <img src={im} className="card-img" alt="..."/>
                        </div>
                        <div className="col-12 col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">{Variables.SIGN_IN_TITLE}</h3>
                            <form>
                                <Input text= {Variables.SIGN_IN_PHONE} type="text"/><br/>
                                <Input text= {Variables.SIGN_IN_PASSWORD} type="password"/><br/>
                                <label htmlFor="check">
                                <input type="checkbox" id="check" className="pink-inp"/> 
                                  { Variables.SIGN_IN_SAVE} 
                                </label><br/>
                                <Button text={Variables.SIGN_IN_CONNECT}/>
                                <p> {Variables.SIGN_IN_RESET_PASSWORD} 
                                <a href="">
                                    {Variables.SIGN_IN_RESET_LINK}
                                </a>
                                </p>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Connexion