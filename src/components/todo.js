import React, { Component } from 'react';
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
            sortOption: {
                item: '',
                direction: ''
            },
            searchStr: ''
        }
    }

    handleSearch = (value) => {
        this.setState({
            searchStr: value
        })
    }

    handleSort = (item, direction) => {
        this.setState({
            sortOption: {
                item: item,
                direction: direction
            }
        })
    }

    handleCompare = (item, order) => {
        if(typeof item === 'string') {
            if(order === 'asc') {
                
            }
            else {
                
            }    
        }

        if(Number.isInteger(item)) {
            if(order === 'asc') {
               
            }
            else {
               
            }    
        }
    }

    render() {
        let originList = this.state.toDoList;
        let list = [];
        const search = this.state.searchStr;

        if(search.length) {
            originList.forEach((item) => {
                if(item.name.toLowerCase().indexOf(search) !== -1) {
                    list.push(item);
                }
            })
        }
        else {
            list = originList;
        }

        return (
            <div className="container">
                <Title text="React Exercise - To Do List"/>

                <Control onClickSearch={this.handleSearch}/>

                <TaskList list={list}/>
            </div>
        )
    }
};

export default ToDoList;