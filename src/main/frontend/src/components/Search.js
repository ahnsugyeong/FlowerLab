import React from 'react';
import '../styles/Search.css'

function Search() {
    return (
        <div className="search-container">
            <input
            type="text"
            placeholder="검색어를 입력해 주세요."
            // value={searchQuery}
            // onChange={event => setSearchQuery(event.target.value)}
        />
        </div>
    );
}

export default Search;