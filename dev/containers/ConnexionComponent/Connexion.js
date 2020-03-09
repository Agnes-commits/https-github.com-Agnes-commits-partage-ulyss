import React from 'react'
import './Connexion.scss'
import Variables from '../../variables.js'


class Connexion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.submitSignInForm = this.submitSignInForm.bind(this);
        this.submitPasswordForgot = this.submitPasswordForgot.bind(this);
    }

    setUsername(e) {
        this.setState({username: e.target.value})
        console.log("username")
    }
    setPassword(e) {
        this.setState({password: e.target.value})
        console.log("password")
    }
    submitSignInForm() {

    }
    submitPasswordForgot() {

    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-4 mainContent">
                        <form onSubmit={this.submitSignInForm}>
                            <label> 
                                {Variables.SIGN_IN_USERNAME}
                                <input type="text" value={this.state.username} onChange={this.setUsername.bind(this)} />
                            </label>
                            <label>
                                {Variables.SIGN_IN_PASSWORD}
                                <input type="password" value={this.state.password} onChange={this.setPassword.bind(this)}/>
                            </label>
                            <div>
                                <div className="is-forgotbtn">
                                    <button onClick={this.submitPasswordForgot.bind(this)}>{Variables.SIGN_IN_RESET_PASSWORD}</button>
                                </div>
                                <div className="is-formBtn">
                                    <button  type="submit">{Variables.SIGN_IN_CONNECT}</button>
                                </div>
                            </div>
                            <hr/>
                            <div className="is-createBtn">
                                <a  href="">{Variables.SIGN_IN_CREATE_COMPTE}</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Connexion