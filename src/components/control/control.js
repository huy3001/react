import React, { Component } from 'react';
import SearchForm from './search';
import Sort from './sort';
import AddTask from './add';
class Control extends Component {
    render() {
        return (
            <div className="control">
                <div className="row">
                    <div className="col-4">
                        <SearchForm/>
                    </div>
                    <div className="col-4">
                        <Sort/>
                    </div>
                    <div className="col-4">
                        <AddTask/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Control;