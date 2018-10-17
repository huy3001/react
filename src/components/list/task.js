import React, {Component} from 'react';

const tasks = [
    {
        id: 1,
        task: 'Homapage',
        level: 'High'
    },
    {
        id: 2,
        task: 'Catalog',
        level: 'Normal'
    },
    {
        id: 3,
        task: 'Product',
        level: 'Low'
    }
]

const listTask = tasks.map((item) => {
    return (
        <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.task}</td>
            <td>{item.level}</td>
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