import React, { Component } from 'react';

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state ={
            tasks:[
                'Nauczyć sie do testu',
                'zjeść bulke',
                'posprzatac'
            ]
        }
    }

    render(){
        return(
            <div>
                <ol>
                    {this.state.tasks.map((task, index)=>(
                        <li key = {index}>{task}</li>
                    ))}
                </ol>
            </div>
        );
    }

}

export default ToDo;
