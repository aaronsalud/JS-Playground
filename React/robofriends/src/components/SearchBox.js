import React from 'react';

const SearchBox = ({onSearchChange}) => {
    return (
        <div className="mb3">
            <input type="search" placeholder="search robots" onChange={e => onSearchChange(e.target.value)} />
        </div>
    );
};

export default SearchBox;