import './SearchBox.css'


function SearchBox({handleSearch, searchQuery}) {


    const handleSearchEvent = (event) => {
        event.preventDefault();
        handleSearch(searchQuery);

    };

    return (
        <div className='search-container'>
            <input
             className= "search-box"
             type='search'
             value={searchQuery}
             onChange={(event) => handleSearch(event.target.value)}
             placeholder='search movies'>
             </input>
        </div>
    )
}
export default SearchBox;
