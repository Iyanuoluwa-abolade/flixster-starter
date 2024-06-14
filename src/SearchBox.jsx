import './SearchBox.css'


function SearchBox({handleSearch, searchQuery}) {
    // const [searchQuery, setSearchQuery] = useState('');


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
            {/* <button onClick={handleSearchEvent}>Search</button> */}
        </div>
    )
}
export default SearchBox;
