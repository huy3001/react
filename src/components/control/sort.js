import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
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
        )
    }
}

export default Sort;