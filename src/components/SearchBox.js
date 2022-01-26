import React from 'react'


const SearchBox=({searchField,searchChange})=>{
    return (
        <div>

        <input className="searchInput" type="search" placeholder="search players" onChange={searchChange} />
        </div>
    )

}


export default SearchBox