import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import $ from'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'


import { store } from '../redux/store'
import './App.css'


class App extends  React.Component{

    state = store.getState()
   
    render(){
        return (
            <Router>
                <Route path="/">
                    <h1>Welcome to react app</h1>
                </Route>
            </Router>
        )
    }
}


export default App