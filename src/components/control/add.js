import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskLevel: ''
        }
    }

    handleSaveButton = async () => {
        await this.props.onClickSave(this.state.taskName, this.state.taskLevel);
        await this.setState({
            taskName: '',
            taskLevel: ''
        })
    }

    handleChangeName = (event) => {
        this.setState({
            taskName: event.target.value
        })
    }

    handleChangeLevel = (event) => {
        this.setState({
            taskLevel: parseInt(event.target.value)
        })
    }

    render() {
        return (
            <div className="add-task">
                <div className="action text-right">
                    <button className="btn btn-success" type="button" data-toggle="modal" data-target="#addTaskModal">Add Task</button>
                </div>
                <div className="modal fade" id="addTaskModal" tabIndex="-1" role="dialog" aria-labelledby="addTaskModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addTaskModalLabel">Please enter task here</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="taskName">Task Name</label>
                                        <input type="text" className="form-control" id="taskName" placeholder="Name" value={this.state.taskName} onChange={this.handleChangeName}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="taskLevel">Task Level</label>
                                        <input type="number" className="form-control" id="taskLevel" min="1" max="3" aria-describedby="taskLevelHelp" placeholder="Level" value={this.state.taskLevel} onChange={this.handleChangeLevel}/>
                                        <small id="taskLevelHelp" className="form-text text-muted">We have 3 levels: 1 - Low, 2 - Normal, 3 - High</small>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSaveButton}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTask;