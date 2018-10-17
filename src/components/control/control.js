import React, { Component } from 'react';

class Control extends Component {
    render() {
        return (
            <div className="control">
                <div className="row">
                    <div className="col-4">
                        <div className="search">
                            <form className="form-inline">
                                <input className="form-control" type="text" placeholder="Search for..."/>
                                <button className="btn btn-primary ml-sm-2" type="submit">Ok</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="sort text-center">
                            <div className="btn-group">
                                <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-sm-2">Sort By</span>
                                    <span className="badge badge-light mr-sm-2">Name - ASC</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Name - ASC</a>
                                    <a className="dropdown-item" href="#">Name - DSC</a>
                                    <a className="dropdown-item" href="#">Level - ASC</a>
                                    <a className="dropdown-item" href="#">Level - DSC</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="action text-right">
                            <button className="btn btn-secondary" type="button">Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Control;