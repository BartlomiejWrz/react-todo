import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {init} from './state';

const mapStateToProps = state => ({
    tasks: state.tasks.list
});

const mapDispatchToProps = dispatch => ({
    initData: () => dispatch(init())
});

class TaskList extends Component {

    componentWillMount() {
        this.props.initData();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.locals.map(task => (
                        <li key={task.id}>
                            <Link to={`/task/${task.id}`}>{task.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TaskList);
