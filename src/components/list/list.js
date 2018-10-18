import React, { Component } from 'react';
import Task from './task';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.list
        }
    }

    render() {
        return (
            <div className="list mt-4">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Task</th>
                            <th scope="col">Level</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <Task tasks={this.state.tasks}/>
                </table>
            </div>
        )
    } 
}

export default TaskList;