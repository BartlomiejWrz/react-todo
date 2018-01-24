import React, { Component } from 'react';
import Container from './Container';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const style = {
    minWidth: 275,
    maxWidth: 500,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    align: 'center'
};

class Header extends Component{
    render(){
        return(
            <Grid
                container
                justify= "center"
            >
            <div >
                <Paper style={style} zDepth={4}>
                <h1>Moja lista to do</h1>
                <Container/>
                </Paper>
            </div>
            </Grid>
        );
    }
}
export default Header;