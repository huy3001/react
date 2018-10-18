import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOption: [
                {
                    id: 1,
                    name: 'Name',
                    direction: 'ASC'
                },
                {
                    id: 2,
                    name: 'Name',
                    direction: 'DESC'
                },
                {
                    id: 3,
                    name: 'Level',
                    direction: 'ASC'
                },
                {
                    id: 4,
                    name: 'Level',
                    direction: 'DESC'
                }
            ],
            isActive: ''
        }
    }

    handleSortOption = (event) => {
        event.preventDefault();
        this.setState({
            isActive: event.target.getAttribute('href')
        });
    }

    render() {
        let sortList = this.state.sortOption;
        let sortActive = 'Name - ASC';
        const activeItem = this.state.isActive;

        if(activeItem.length) {
            sortList.forEach((item) => {
                if(item.id === parseInt(activeItem)) {
                    sortActive = item.name + ' - ' + item.direction;
                }
            })
        }

        return (
            <div className="sort text-center">
                <div className="btn-group">
                    <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-sm-2">Sort By</span>
                        <span className="badge badge-light mr-sm-2">{sortActive}</span>
                    </button>
                    <div className="dropdown-menu">
                        {/* <a className="dropdown-item" href="#" onClick={this.handleSortOption}>Name - ASC</a>
                        <a className="dropdown-item" href="#">Name - DESC</a>
                        <a className="dropdown-item" href="#">Level - ASC</a>
                        <a className="dropdown-item" href="#">Level - DESC</a> */}
                        {
                            sortList.map((sort) => 
                                <a key={sort.id} className="dropdown-item" href={sort.id} onClick={this.handleSortOption}>{sort.name} - {sort.direction}</a>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Sort;