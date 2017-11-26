import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Dashboard from'./components/Dashboard';
import Header from'./components/Header';
import ToDo from'./components/ToDo';
import Form from'./components/Form';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <Header/>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/todo' component={ToDo}/>
                    <Route path='/form' component={Form}/>
                    <Route path='/counter' component={null}/>
                </div>
            </Router>
        );
    }
}




export default App;
