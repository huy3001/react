import React, { Component } from 'react';
import Task from './task';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOrder: 'asc',
            levelOrder: 'asc'
        }
    }

    handleSortName = async (event) => {
        const sortItem = event.target.getAttribute('data').toLowerCase();
        const sortOrder = event.target.getAttribute('title').toLowerCase();
        let nameActive = this.state.nameOrder;

        await this.setState({
            nameOrder: nameActive === 'asc' ? 'desc' : 'asc',
        });
        
        await this.props.onClickHeading(sortItem, sortOrder);
    }

    handleSortLevel = async (event) => {
        const sortItem = event.target.getAttribute('data').toLowerCase();
        const sortOrder = event.target.getAttribute('title').toLowerCase();
        let levelActive = this.state.levelOrder;

        await this.setState({
            levelOrder: levelActive === 'asc' ? 'desc' : 'asc'
        });
        
        await this.props.onClickHeading(sortItem, sortOrder);
    }

    render() {
        let nameActive = this.state.nameOrder;
        let levelActive = this.state.levelOrder;
        const downArrow = '\u{02193}';
        const upArrow = '\u{02191}';

        return (
            <div className="list mt-4">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col" title={this.state.nameOrder} data="name" onClick={this.handleSortName}>Task {nameActive === 'asc' ? upArrow : downArrow}</th>
                            <th scope="col" title={this.state.levelOrder} data="level" onClick={this.handleSortLevel}>Level {levelActive === 'asc' ? upArrow : downArrow}</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <Task tasks={this.props.list} onClickEdit={this.props.onClickEdit} onClickRemove={this.props.onClickRemove}/>
                </table>
            </div>
        )
    } 
}

export default TaskList;