import React, { Component } from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Checkbox from 'material-ui/Checkbox';


const style = {
    checked: {
        color: 'red',
        textDecoration: 'line-through'
    },
    unChecked: {}
};

class Task extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: false
        }
    }

    handleChange(event) {
        this.setState({checked: event.target.checked});
    }

    render() {
        return (
            <ListItem>
                <Checkbox onChange={this.handleChange}/>
                <ListItemText primary={this.props.label} style={this.state.checked ? style.checked : style.unChecked} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                        <DeleteIcon onClick={() => this.props.onRemove(this.props.label)} />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Task;
