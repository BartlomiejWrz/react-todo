import React, { Component } from 'react';

class Users extends Component{

    constructor(props) {

        super(props);
        this.fetchData= this.fetchData.bind(this);

        this.state = {
            loading:false,
            users: [{
                name: 'Ala'
            }, {
                name: 'kasia'
            }, {
                name: 'Dorota'
            }]
        }
    }

    fetchData(){
        this.setState({loading:true});
        fetch('https://jsonplaceholder.typicode.com/users')
            .then (response => response.json())
            .then(data =>{
                this.setState({loading: false, users:data});
        })
    }

    renderIndicator() {
        if (this.state.loading){
            return <div style={{color:'red', fontSize: 16}}>Loading ... </div>
        }

    }

    render(){
        return(
            <div>
            <h1>Users</h1>
                {this.renderIndicator()}
                <button onClick={this.fetchData}>Pobierz dane</button>
                {this.state.users.map((user, index) =>(
                    <div key={index}>
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;