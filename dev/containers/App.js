import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'


import Connexion from "./ConnexionComponent/Connexion"


class App extends React.Component {
    
        render() {
           return(
                <Router>
                        <Route exact={true} path="/connexion">
                                <Connexion/>
                        </Route>
                </Router>
                )
        }
}

const checkRoute = (location) => {

        // condition pour afficher un menu en fonction du droit de l'utilisateur
        
}

export default App;
