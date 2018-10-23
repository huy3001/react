import React, { Component } from 'react';
import Task from './task';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                item: '',
                order: ''
            },
            activeOrder: 'asc'
        }
    }

    handleSortOption = async (event) => {
        await this.setState({
            sort: {
                item: event.target.getAttribute('data').toLowerCase(),
                order: event.target.getAttribute('title').toLowerCase()
            },
            activeOrder: event.target.getAttribute('active')
        });
        await this.props.onClickHeading(this.state.sort.item, this.state.sort.order);
    }

    render() {
        return (
            <div className="list mt-4">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col" title={this.state.activeOrder} data="name" onClick={this.handleSortOption}>Task &uarr;</th>
                            <th scope="col" title={this.state.activeOrder} data="level" onClick={this.handleSortOption}>Level &darr;</th>
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