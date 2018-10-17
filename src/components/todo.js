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
    render() {
        return (
            <div className="container">
                <Title text="React Exercise - To Do List"/>

                <Control/>

                <TaskList/>
            </div>
        )
    }
};

export default ToDoList;