import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
 

import Header from './HeaderComponent/Header'
import Footer from './FooterComponent/Footer'
import Menu from './MenuComponent/Menu'
import Connexion from './ConnexionComponent/Connexion'
import Input from './InputComponent/Input'
import Inscription from './InscriptionComponent/Inscription1'
import InscriptionStepTwo from './InscriptionComponent/Inscription2'
import InscriptionStepThree from './InscriptionComponent/Inscription3'
import u1 from "../assets/agreement_.svg"
import u2 from "../assets/compte_valide.svg"
import u3 from "../assets/connexion_.svg"
import u4 from "../assets/elu_.svg"
import u6 from "../assets/inscription_.svg"
import u7 from "../assets/undraw_discount_d4bd.svg"
import u8 from "../assets/undraw_true_friends_c94g.svg"
import u9 from "../assets/undraw_typewriter_i8xd.svg"

class App extends React.Component {
    
        render() {
           return(
                <Router>
                        <Switch> 
                                <Route exact={true} path="/connexion">
                                        <Header/>
                                        <Menu hide={true}/>
                                        <Connexion/>
                                        <Footer/>
                                </Route>
                                <Route exact={true} path="/template">
                                        <Header/>
                                        <Menu hide={false}/>
                                        <img src={u1} className="card-img" width="100px" height="80px" alt="..."/>
                                        <img src={u2} className="card-img" width="100px" height="80px" alt="..."/>
                                        <img src={u3} className="card-img" width="100px" height="80px" alt="..."/>
                                        <img src={u4} className="card-img" width="100px" height="80px" alt="..."/>
                                       
                                        <img src={u6} className="card-img" width="100px" height="80px" alt="..."/>
                                        <img src={u7} className="card-img" width="100px" height="80px" alt="..."/>
                                        <img src={u8} className="card-img" width="100px" height="80px" alt="..."/>
                                        <img src={u9} className="card-img" width="100px" height="80px" alt="..."/>
                                        <Input text="input" func="fonction"/>
                                        <Footer/>
                                </Route>
                                <Route exact={true} path="/inscription">
                                        <Header/>
                                        <Menu hide={true}/>
                                        <Inscription/>
                                        <Footer/>
                                </Route>
                                <Route exact={true} path="/inscription1">
                                        <Header/>
                                        <Menu hide={true}/>
                                        <InscriptionStepTwo/>
                                        <Footer/>
                                </Route>
                                <Route exact={true} path="/inscription2">
                                        <Header/>
                                        <Menu hide={true}/>
                                        <InscriptionStepThree/>
                                        <Footer/>
                                </Route>
                        </Switch>
                </Router>
                )
        }
}

const checkRoute = (location) => {

        // condition pour afficher un menu en fonction du droit de l'utilisateur
        
}

export default App;
