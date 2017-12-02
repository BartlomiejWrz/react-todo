import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Button from'./button/index';
import Users from'./Users';
import Form from'./Form';


class Header extends Component{
    render(){
        return(
            <div>

                <h1>App header</h1>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/todo">To Do</Link></li>
                    <li><Link to="/Form">Form</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/Users">Users</Link></li>
                </ul>

                <Button label='OK'/>
            </div>
        );
    }
}

export default Header;