import React, { Component } from 'react';

class SearchBar extends Component {
    state = {term: ''};

    onFormSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return(
               <div className="ui segment">
                <form action="" className="ui form" onSubmit={(e)=>this.onFormSubmit(e)}>
                    <div className="field">
                        <label htmlFor="searchbar">Image Search</label>
                        <input type="text" name="searchbar" id="" value={this.state.term} onChange={(e)=> this.setState({term: e.target.value})} />
                    </div>    
                </form>
            </div>
        );
    }
}

export default SearchBar;