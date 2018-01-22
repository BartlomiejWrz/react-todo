import React,  {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import TasksList from './Searching';



class Container extends Component {
    constructor(props){
        super(props);
        this.state ={
            query: '',
            task: '',
            tasks:['Nauczyć sie do testu', 'zjeść bulke', 'posprzatac']
        };
        this.textChanged = this.textChanged.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnRemove = this.handleOnRemove.bind(this);
    }

    textChanged(event) {
        this.setState({task: event.target.value});
    }

    searchChanged(event) {
        this.setState({query: event.target.value});
    }

    handleSubmit(event) {
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ''
        });
        event.preventDefault();
    }

    handleOnRemove(taskToRemove) {
        this.setState({
            tasks: this.state.tasks.filter(task => task !== taskToRemove),
            task: ''
        });
    }

    render(){
        return(
            <Grid container spacing={24}>

                <Grid item xs={12} sm={12}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            style={{ color: '#FF8A80' }}
                            id="task"
                            label="Zadanie"
                            value={this.state.task}
                            onChange={this.textChanged}
                            margin="normal"
                        />
                        <Button type="submit" style={{ backgroundColor: '#B71C1C', color: '#FF8A80' }}>Add</Button>
                    </form>
                    <TextField
                        id="task"
                        label="Szukaj"
                        onChange={this.searchChanged}
                        margin="normal"
                    />
                </Grid>
                    <Grid item xs={1} sm={1} />
                    <Grid item xs={10} sm={10}>
                        <h2>Lista zadań</h2>
                        <TasksList
                            query={this.state.query}
                            tasks={this.state.tasks}
                            onRemove={this.handleOnRemove}
                        />
                    <Grid item xs={1} sm={1} />
                </Grid>

            </Grid>

        );
    }
}

export default Container;


