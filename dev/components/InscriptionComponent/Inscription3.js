import React from 'react'
import './Inscription.scss'
import im from '../../assets/inscription_.svg'
import Variables from '../../variables'

import Button from '../ButtonComponent/Button'

class InscriptionStepThree extends React.Component {
    render(){
        return(
            <div className="trois" >
                <div className="card" >
                    <div className="row no-gutters">
                        <div className="col-12 col-md-5 deg">
                        <img src={im} className="card-img" alt="..."/>
                        </div>
                        <div className="col-12 col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">{Variables.SIGN_UP_CODE_TITLE}</h3>
                            <form>
                                <h4>{Variables.SIGN_UP_CODE}</h4>
                                <input type="password"/> <br/>
                                <Button text={Variables.SIGN_UP_CONFIRM}/><br/>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InscriptionStepThree