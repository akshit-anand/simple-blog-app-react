import React from 'react'

const Search = ({ onSearchChange }) => {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="search..."
                autoComplete="off"
                onChange={onSearchChange}
            />
        </div>
    )
}

export default Search
