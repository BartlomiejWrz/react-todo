import React, { Component } from 'react';
import Search from'./Search';


class Form extends Component{
    constructor(props){
        super(props);
        this.handleTitle=this.handleTitle.bind(this);
        this.handleDescription=this.handleDescription.bind(this);
        this.handleSubmit=this.handleFormSubmit.bind(this);
        this.state ={
            title: '',
            description: 'zmiana?',
            category: 'Bookas'
        };
    }

    handleFormSubmit(event){
        console.log(this.state)
        event.preventDefault();
    }

    handleTitle(event){
        this.setState({
            title: event.target.value
        })
    }

    handleDescription(event){
        this.setState({
            description: event.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>{(this.state.title !== '' ? 'PROMOCJA' + this.state.title: '')}</h3>
                <p>Description: {this.state.description}</p>
                <p>Category: {this.state.category}</p>
               <form>
                   <label>Name: </label>
                   <input type="text" onChange={this.handleTitle}/>
                   <div>
                   <textarea onChange={this.handleDescription}/>
                       <select>
                           <option>Opcja 1</option>
                           <option>Opcja 2</option>
                           <option>Opcja 3</option>
                       </select>
                   </div>

                   <div>
                   <input type="submit" value ="Wyślij mnie!!!"/>
                   </div>
               </form>
            <Search/>
            </div>

        );
    }
}

export default Form;