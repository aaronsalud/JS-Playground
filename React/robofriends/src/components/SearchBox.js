import React, { useState, useEffect } from 'react';

const SearchBox = () => {

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log(searchTerm);
    }, [searchTerm])

    return (
        <div className="mb3">
            <input type="search" placeholder="search robots" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
    );
};

export default SearchBox;