import React, { Component } from 'react';

class AddTask extends Component {
    render() {
        return (
            <div className="action text-right">
                <button className="btn btn-success" type="button">Add Task</button>
            </div>
        )
    }
}

export default AddTask;