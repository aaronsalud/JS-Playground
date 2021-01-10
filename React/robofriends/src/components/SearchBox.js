import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions';

const SearchBox = ({ setSearchTerm }) => {

    let searchTimer = null;
    const onSearchTermChange = e => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            setSearchTerm(e.target.value);
        }, 500);
    };

    return (
        <div className="mb3">
            <input type="search" placeholder="search robots" onChange={onSearchTermChange} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm
    };
}

export default connect(mapStateToProps, { setSearchTerm })(SearchBox);