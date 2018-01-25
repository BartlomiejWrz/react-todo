import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

import { addTask } from '../TaskList/state';

const mapDispatchToProps = dispatch => ({
    add: (data) => dispatch(addTask(data))
});

class TaskAdd extends React.Component {

    state = {
        name: '',
    }

    handleSubmit = event => {
        this.props.add(this.state);
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <TextField placeholder="Task" name="task" onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="submit" value="Add"/>
                </div>
            </form>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TaskAdd);
