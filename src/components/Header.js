import React, { Component } from 'react';
import Container from './Container';




class Header extends Component{
    render(){
        return(
            <div>
                <h1>Moja lista to do</h1>
                <Container/>
            </div>
        );
    }
}
export default Header;