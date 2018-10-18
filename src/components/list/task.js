import React, { Component } from 'react';

class Task extends Component {
    levelInfo = (level) => {
        switch (level) {
            case 1:
                return <span className="badge badge-secondary">Low</span>;
            case 3:
                return <span className="badge badge-danger">High</span>;
            default:
                return <span className="badge badge-success">Normal</span>;
        }
    }

    render() {
        let tasks = this.props.tasks;

        return (
            <tbody>
                {
                    tasks.map((task) =>
                        <tr key={task.id}>
                            <th scope="row">{task.id}</th>
                            <td>{task.name}</td>
                            <td>{this.levelInfo(task.level)}</td>
                            <td>
                                <button className="btn btn-sm btn-warning" type="button">Edit</button>
                                <button className="btn btn-sm btn-danger ml-sm-2" type="button">Remove</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        )
    }
}

export default Task;