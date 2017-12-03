import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Dashboard from'./components/Dashboard';
import Header from'./components/Header';
import ToDo from'./components/ToDo';
import Users from'./components/Users';
import Form from'./components/Form';
import Container from './components/tasks/Container';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <Header/>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/todo' component={ToDo}/>
                    <Route path='/form' component={Form}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/counter' component={null}/>
                    <Route path='/container' component={Container}/>
                </div>
            </Router>
        );
    }
}




export default App;
