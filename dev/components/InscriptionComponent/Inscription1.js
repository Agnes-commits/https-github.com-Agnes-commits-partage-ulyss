import React from 'react'
import './Inscription.scss'
import im from "../../assets/inscription_.svg"
import Variables from '../../variables'
import Input from '../InputComponent/Input'
import Button from '../ButtonComponent/Button'

class Inscription extends React.Component {
    render(){
        return(
            <div className="un" >
                <div className="card" >
                    <div className="row no-gutters">
                        <div className="col-12 col-md-5 deg">
                        <img src={im} className="card-img" alt="..."/>
                        </div>
                        <div className="col-12 col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">{Variables.SIGN_IN_TITLE}</h3>
                            <form>
                                <Input text= {Variables.SIGN_UP_FIRSTNAME} type="text"/>
                                <Input text= {Variables.SIGN_UP_LASTNAME} type="text"/>
                                <Input text= {Variables.SIGN_UP_PHONE} type="text"/>
                                <Input text= {Variables.SIGN_UP_PASSWORD} type="password"/>
                                <Input text= {Variables.SIGN_UP_PASSWORD_CONFIRM} type="password"/>
                                <Button text={Variables.SIGN_UP_CONTINUE}/>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inscription