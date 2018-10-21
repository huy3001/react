import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            searchStr: ''
        }
    }

    handleSearchButton = () => {
        this.props.onClickGo(this.state.searchStr);
    }

    handleResetButton = () => {
        this.setState({
            inputValue: '',
            searchStr: ''
        })
        setTimeout(() => {
            this.props.onClickReset(this.state.searchStr);
        }, 100);
    }

    handleChangeInput = (event) => {
        this.setState({
            inputValue: event.target.value,
            searchStr: event.target.value
        })
    }

    render() {
        return (
            <div className="search">
                <form className="form-inline">
                    <input className="form-control" type="text" placeholder="Search for..." value={this.state.inputValue} onChange={this.handleChangeInput}/>
                    <button className="btn btn-primary ml-sm-2" type="button" onClick={this.handleSearchButton}>Go</button>
                    <button className="btn btn-danger ml-sm-2" type="button" hidden={this.state.searchStr === '' ? "hidden" : ""} onClick={this.handleResetButton}>Reset</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;