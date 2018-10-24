import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editedName: '',
            editedLevel: ''
        }
    }

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

    handleEdit = (event) => {
        
    }

    handleChangeName = (event) => {
        this.setState({
            editedName: event.target.value
        })
    }

    handleChangeLevel = (event) => {
        this.setState({
            editedLevel: parseInt(event.target.value)
        })
    }

    handleRemove = (event) => {
        let selectedId = event.target.getAttribute('data-remove');
        this.props.onClickRemove(parseInt(selectedId));
    }

    render() {
        let tasks = this.props.tasks;

        // console.log(tasks);

        return (
            <tbody>
                {
                    tasks.map((task) =>
                        <tr key={task.id}>
                            <th scope="row">{task.id}</th>
                            <td>{task.name}</td>
                            <td>{this.levelInfo(task.level)}</td>
                            <td>
                                <button className="btn btn-sm btn-warning" type="button" data-toggle="modal" data-target="#editTaskModal" data-edit={task.id} onClick={this.handleEdit}>Edit</button>
                                <button className="btn btn-sm btn-danger ml-sm-2" type="button" data-remove={task.id} onClick={this.handleRemove}>Remove</button>
                            </td>
                        </tr>
                    )
                }
                <tr>
                    <td colSpan="4">
                        <div className="modal fade" id="editTaskModal" tabIndex="-1" role="dialog" aria-labelledby="editTaskModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="editTaskModalLabel">Try to change task info</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="taskName">Task Name</label>
                                                <input type="text" className="form-control" id="taskName" placeholder="Name" value="" onChange={this.handleChangeName}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="taskLevel">Task Level</label>
                                                <input type="number" className="form-control" id="taskLevel" min="1" max="3" aria-describedby="taskLevelHelp" placeholder="Level" value="" onChange={this.handleChangeLevel}/>
                                                <small id="taskLevelHelp" className="form-text text-muted">We have 3 levels: 1 - Low, 2 - Normal, 3 - High</small>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleEdit}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default Task;