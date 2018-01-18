import React, { Component } from 'react';
import Container from './Container';
import Search from "./Search";




class Header extends Component{
    render(){
        return(
            <div>
                <h1>Moja lista to do</h1>
                <Container/>
                <Search/>
            </div>
        );
    }
}
export default Header;