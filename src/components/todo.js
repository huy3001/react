import React, { Component } from 'react';
import {findIndex, filter, concat} from 'lodash';
import Control from './control/control';
import TaskList from './list/list';
import '../css/style.css';

function Title(props) {
    return (
        <div className="title">
            <h1 className="text-center mt-4">{props.text}</h1>
            <hr/>
        </div>
    )
}

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [
                {
                    id: 1,
                    name: 'Homepage',
                    level: 3 
                },
                {
                    id: 2,
                    name: 'Catalog',
                    level: 2
                },
                {
                    id: 3,
                    name: 'Product',
                    level: 1 // 1 - Low, 2 - Normal, 3 - High
                }
            ],
            sortOption: [
                {
                    id: 1,
                    name: 'Name',
                    order: 'ASC'
                },
                {
                    id: 2,
                    name: 'Name',
                    order: 'DESC'
                },
                {
                    id: 3,
                    name: 'Level',
                    order: 'ASC'
                },
                {
                    id: 4,
                    name: 'Level',
                    order: 'DESC'
                }
            ],
            task: {
                id: '',
                name: '',
                level: ''
            },
            sort: {
                item: '',
                order: ''
            },
            searchStr: ''
        }
    }

    handleSearch = (value) => {
        this.setState({
            searchStr: value
        })
    }

    handleReset = (value) => {
        this.setState({
            searchStr: value
        })
    }

    handleAddTask = async (name, level) => {
        // Copy current toDoList
        const currentList = [...this.state.toDoList];

        // Set state for new task
        await this.setState({
            task: {
                id: this.state.toDoList.length + 1,
                name: name,
                level: level
            }
        })

        // Set state to update new toDoList
        await this.setState({
            toDoList: concat(currentList, this.state.task)
        })

        // Save new toDoList to localStorage
        await localStorage.setItem('newList', JSON.stringify(this.state.toDoList));
    }

    handleEditTask = async (id, name, level) => {
        // Copy current toDoList
        const currentList = [...this.state.toDoList];

        // Find index of edited task in toDoList
        let taskIndex = findIndex(currentList, (item) => {
            return item.id === id;
        });

        // Set state for edited task
        await this.setState({
            task: {
                id: id,
                name: name,
                level: level
            }
        })

        // Update edited list after edit task
        currentList.splice(taskIndex, 1, this.state.task);

        // Set state to update toDoList by editedList
        await this.setState({
            toDoList: currentList
        })

        // Save updated toDoList to localStorage
        await localStorage.setItem('editedList', JSON.stringify(this.state.toDoList));
    }

    handleRemoveTask = async (id) => {
        // Copy current toDoList
        const currentList = [...this.state.toDoList];

        // Filter updated list after remove task
        let updatedList = filter(currentList, (item) => {
            return item.id !== id;
        });

        // Set state to update toDoList by updatedList
        await this.setState({
            toDoList: updatedList
        })

        // Save updated toDoList to localStorage
        await localStorage.setItem('updatedList', JSON.stringify(this.state.toDoList));
    }

    handleSort = (item, order) => {
        this.setState({
            sort: {
                item: item,
                order: order
            }
        })
    }

    handleCompare = (item, order = 'asc') => {
        return function(a, b) {
            if(!a.hasOwnProperty(item) || !b.hasOwnProperty(item)) {
                // property doesn't exist on either object
                return 0; 
            }

            const varA = (typeof a[item] === 'string') ? a[item].toLowerCase() : a[item];
            const varB = (typeof b[item] === 'string') ? b[item].toLowerCase() : b[item];

            let comparison = 0;

            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }

            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        }
    }

    componentDidMount() {
        if (localStorage.hasOwnProperty('newList')) {
            // Get new toDoList from localStorage
            let newList = localStorage.getItem('newList');
            newList = JSON.parse(newList);

            // Update new toDoList
            this.setState({
                toDoList: newList
            });
        }

        if (localStorage.hasOwnProperty('editedList')) {
            // Get edited toDoList from localStorage
            let editedList = localStorage.getItem('editedList');
            editedList = JSON.parse(editedList);

            // Update new toDoList
            this.setState({
                toDoList: editedList
            });
        }

        if (localStorage.hasOwnProperty('updatedList')) {
            // Get updated toDoList from localStorage
            let updatedList = localStorage.getItem('updatedList');
            updatedList = JSON.parse(updatedList);

            // Update new toDoList
            this.setState({
                toDoList: updatedList
            });
        }
    }

    render() {
        let list = [...this.state.toDoList]; // Copy current toDoList
        let sortItem = this.state.sort.item;
        let sortOrder = this.state.sort.order;
        const search = this.state.searchStr;

        // Filter the list when have a search string 
        if(search.length) {
            list = filter(list, (item) => {
                return item.name.toLowerCase().indexOf(search) !== -1;
            })
        }

        // Sort the list when select a sort option
        if(sortItem.length) {
            list = list.sort(this.handleCompare(sortItem, sortOrder));
        }

        return (
            <div className="container">
                <Title text="React Exercise - To Do List"/>

                <Control onClickSearch={this.handleSearch} onClickReset={this.handleReset} sortOption={this.state.sortOption} onClickSort={this.handleSort} onClickAddTask={this.handleAddTask}/>

                <TaskList list={list} onClickHeading={this.handleSort} onClickEdit={this.handleEditTask} onClickRemove={this.handleRemoveTask}/>
            </div>
        )
    }
};

export default ToDoList;