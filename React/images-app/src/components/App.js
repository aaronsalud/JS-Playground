import React, { Component } from 'react';
import axios from '../api/axios-client';
import SearchBar from './SearchBar'
import ImageList from './ImageList';

class App extends Component {
    state = { images: [] };

    onSearchSubmit = async (term) =>{
       const response = await axios.get(`/search/photos`, {
            params: { query: term}
        });
        this.setState({images: response.data.results});
    }

    render(){ 
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
                <p>Found: {this.state.images.length} images</p> 
            </div>
        );
    }
};

export default App;