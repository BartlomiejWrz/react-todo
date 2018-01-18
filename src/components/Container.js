import React,  {Component} from 'react';
import ToDo from './ToDo';

class Container extends Component {
    constructor(props) {
        super(props);
        this.textChanged = this.textChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            task: '',
            tasks: []
        };
    }

    textChanged(event) {
        this.setState({task: event.target.value})
    }

    searchChanged(event){
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ''
        });
        event.preventDefault();
    }

    handleSubmit(event) {
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={this.state.task}
                           placeholder="Add task ..."
                           onChange={this.textChanged}/>
                    <input type="submit" value="Add"/>
                </form>

                <input type="text" placeholder="Search..." onChange={this.searchChanged}/>

                <h2>Moje zadania</h2>

                <ToDo/>

            </div>
        );
    }
}


export default Container


