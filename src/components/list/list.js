import React, { Component } from 'react';
import Task from './task';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOrder: 'asc',
            activeState: -1
        }
    }

    handleSortOption = async (event) => {
        const sortItem = event.target.getAttribute('data').toLowerCase();
        const sortOrder = event.target.getAttribute('title').toLowerCase();
        let active = this.state.activeState;
        active = -active;

        await this.setState({
            activeOrder: active === -1 ? 'asc' : 'desc',
            activeState: active
        });
        
        await this.props.onClickHeading(sortItem, sortOrder);
    }

    render() {
        let active  = this.state.activeState;
        const downArrow = '\u{02193}';
        const upArrow = '\u{02191}';

        return (
            <div className="list mt-4">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col" title={this.state.activeOrder} data="name" onClick={this.handleSortOption}>Task {active === -1 ? upArrow : downArrow}</th>
                            <th scope="col" title={this.state.activeOrder} data="level" onClick={this.handleSortOption}>Level {active === -1 ? upArrow : downArrow}</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <Task tasks={this.props.list} onClickRemove={this.props.onClickRemove}/>
                </table>
            </div>
        )
    } 
}

export default TaskList;