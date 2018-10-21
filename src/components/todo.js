import React, { Component } from 'react';
import {filter} from 'lodash';
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

    render() {
        let originList = this.state.toDoList;
        let list = [];
        let sortItem = this.state.sort.item;
        let sortOrder = this.state.sort.order;
        const search = this.state.searchStr;

        if(sortItem.length) {
            list = originList.sort(this.handleCompare(sortItem, sortOrder));
        } else {
            list = originList;
        }

        if(search.length) {
            list = filter(originList, (item) => {
                return item.name.toLowerCase().indexOf(search) !== -1;
            })
        } else {
            list = originList;
        }

        return (
            <div className="container">
                <Title text="React Exercise - To Do List"/>

                <Control onClickSearch={this.handleSearch} onClickReset={this.handleReset} sortOption={this.state.sortOption} onClickSort={this.handleSort}/>

                <TaskList list={list}/>
            </div>
        )
    }
};

export default ToDoList;