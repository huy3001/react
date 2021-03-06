import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: ''
        }
    }

    handleSortOption = async (event) => {
        event.preventDefault();
        const sortItem = event.target.getAttribute('data-name').toLowerCase();
        const sortOrder = event.target.getAttribute('data-order').toLowerCase();

        await this.setState({
            isActive: event.target.getAttribute('href')
        });

        await this.props.onClickOption(sortItem, sortOrder);
    }

    render() {
        let sortList = this.props.sortList;
        let sortActive = 'Name - ASC';
        const activeItem = this.state.isActive;

        if(activeItem.length) {
            sortList.forEach((item) => {
                if(item.id === parseInt(activeItem)) {
                    sortActive = item.name + ' - ' + item.order;
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
                        {
                            sortList.map((sort) => 
                                <a key={sort.id} className="dropdown-item" href={sort.id} data-name={sort.name} data-order={sort.order} onClick={this.handleSortOption}>{sort.name} - {sort.order}</a>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Sort;