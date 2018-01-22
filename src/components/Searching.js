import React, { Component } from 'react';
import List from 'material-ui/List';

class Searching = (props) => (
    <List>
        {props.tasks.filter((task) => task.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
            .map((task, index) => (
                <Task key={index} label={task} onRemove={props.onRemove}/>
            ))
        }
    </List>
);

export default Searching;


