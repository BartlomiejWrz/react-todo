import React from 'react';
import { connect } from 'react-redux';

import { getLocal } from './state';

const mapStateToProps = state => ({
    task: state.task.data
});

const mapDispatchToProps = dispatch => ({
    getTask: (id) => dispatch(getTask(id))
});

class Task extends React.Component {

    componentWillMount() {
        const id = this.props.match.params.taskId;
        this.props.getTask(id);
    }

    render() {
        return(
            <div>
                <h1>Task: {this.props.task.name}</h1>
            </div>
        );
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tasks);
