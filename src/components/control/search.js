import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
            <div className="search">
                <form className="form-inline">
                    <input className="form-control" type="text" placeholder="Search for..."/>
                    <button className="btn btn-primary ml-sm-2" type="submit">Go</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;