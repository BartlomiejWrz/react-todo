import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleFormSubmit.bind(this);
    }


    handleFormSubmit(event) {
        console.log('Wartość search: ' + this.searchField.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={field => this.searchField = field}/>
                <input type="submit" value="search"/>
            </form>
        );
    }

}
export default Search;