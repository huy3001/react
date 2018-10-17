import React, { Component } from 'react';

const tasks = [
    {
        id: 1,
        name: 'Homapage',
        level: 'High'
    },
    {
        id: 2,
        name: 'Catalog',
        level: 'Normal'
    },
    {
        id: 3,
        name: 'Product',
        level: 'Low'
    }
]

const listTask = tasks.map((task) => {
    return (
        <tr key={task.id}>
            <th scope="row">{task.id}</th>
            <td>{task.name}</td>
            <td><span className="badge badge-success">{task.level}</span></td>
            <td>
                <button className="btn btn-sm btn-warning" type="button">Edit</button>
                <button className="btn btn-sm btn-danger ml-sm-2" type="button">Remove</button>
            </td>
        </tr>
    )
})

class Task extends Component {
    render() {
        return (
            <tbody>
                {listTask}
            </tbody>
        )
    }
}

export default Task;