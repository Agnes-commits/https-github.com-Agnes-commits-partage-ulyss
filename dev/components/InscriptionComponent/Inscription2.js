import React from 'react'
import './Inscription.scss'
import im from '../../assets/inscription_.svg'
import Variables from '../../variables'
import Input from '../InputComponent/Input'
import Button from '../ButtonComponent/Button'

class InscriptionStepTwo extends React.Component {
    render(){
        return(
            <div className="deux" >
                <div className="card" >
                    <div className="row no-gutters">
                        <div className="col-12 col-md-5 deg">
                        <img src={im} className="card-img" alt="..."/>
                        </div>
                        <div className="col-12 col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">
                                {Variables.SIGN_UP_CHOICE}
                                <label>
                                    <input type="radio" id="rad"/>
                                    {Variables.SIGN_UP_CHOICE_ONE}
                                </label>
                                <label>
                                    <input type="radio" id="rad"/>
                                    {Variables.SIGN_UP_CHOICE_TWO}
                                </label>
                            </h3>
                            <form>
                                <Input text= {Variables.SIGN_UP_BIRTHDAY} type="text"/>
                                <Input text= {Variables.SIGN_UP_LOCALISATION} type="text"/>
                                <Input text= {Variables.SIGN_UP_EMAIL} type="text"/>
                                <Input text= {Variables.SIGN_UP_POLITIQUE} type="text"/>
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

export default InscriptionStepTwo