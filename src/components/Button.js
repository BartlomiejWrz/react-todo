import React, { Component } from 'react';


class Button extends Component{
    render(){
        const buttonStyle={
            backgroundColor: 'green' ,
            color: 'yellow',
            fontSize: 20
        };
        return(
            <div>
                <button style={buttonStyle}>
                    {this.props.label}
                </button>
            </div>
        );
    }
}

export default Button;