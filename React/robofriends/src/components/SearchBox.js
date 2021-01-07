import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions';

const SearchBox = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="mb3">
            <input type="search" placeholder="search robots" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm
    };
}

export default connect(mapStateToProps, { setSearchTerm })(SearchBox);