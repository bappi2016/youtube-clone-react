import React from 'react';

class SearchBar extends React.Component{
    // initialized the state
    state = {searchQuery: ''}



    // now create a call back function - so when the form is submit this will call and 
    onInputChange = (event) => {
    this.setState({searchQuery:event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();
        // make sure we call the callback 'onQuerySubmit' from parent component 'App'- to submit the query or make the query request to the server , we have to hooks the props 'onQuerySubmit' that we created in the <SearchBar/> tag, and pass the state   searchquery as argument.so that our parent component is told what the current search term is.
        this.props.onQuerySubmit(this.state.searchQuery)

        
    }

    

    render(){
        return(
            <div className="search-bar ui segment">
             <form onSubmit = {this.onFormSubmit} action="" className="ui form">
                <div className="field">
                    <label htmlFor="">Search Video </label>
                    <input type="text" 
                    // grab the input and assign it to value-and turn this uncrontrol input to control input by hook it up to the state of our searchBar class- so that we can make sure that we are storing our data for the search term inside of the component not inside the dom.
                    value={this.state.searchQuery}
                    // update the state when the form change or user press enter- 
                    onChange = {this.onInputChange}
                    />
                </div>
            </form>   
            </div>
            )
    };
};

export default SearchBar;