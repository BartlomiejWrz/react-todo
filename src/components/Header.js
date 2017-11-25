import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div>

                <h1>App header</h1>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/todo">To Do</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;