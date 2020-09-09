import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        query: ''
    }

    handleInputChange = (e) => {
        this.setState({ query: e.target.value}); 
    }
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.runMeWhenUserSubmits(this.state.query)
    }

    render() {
        return (
            <div className="ui segment">
                <form 
                    onSubmit={this.handleFormSubmit} 
                    className="ui form">
                        <div className="field">
                            <label>Image Search</label>
                            <input 
                                type="text" 
                                value={this.state.query}
                                onChange={this.handleInputChange} 
                            />
                        </div>
                </form>
            </div>
        )
    }
}