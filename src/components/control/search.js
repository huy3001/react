import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: ''
        }
    }

    handleSearchButton = () => {
        this.props.onClickGo(this.state.searchStr);
    }

    handleChangeInput = (event) => {
        this.setState({
            searchStr: event.target.value
        })
    }

    render() {
        return (
            <div className="search">
                <form className="form-inline" action="">
                    <input className="form-control" type="text" placeholder="Search for..." onChange={this.handleChangeInput}/>
                    <button className="btn btn-primary ml-sm-2" type="button" onClick={this.handleSearchButton}>Go</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;