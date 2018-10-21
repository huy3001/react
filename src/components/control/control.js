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
                        <SearchForm onClickGo={this.props.onClickSearch} onClickReset={this.props.onClickReset}/>
                    </div>
                    <div className="col-4">
                        <Sort sortList={this.props.sortOption} onClickOption={this.props.onClickSort}/>
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