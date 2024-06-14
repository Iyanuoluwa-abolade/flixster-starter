import './FilterBy.css'

function FilterBy({handleOnChange}) {
    return (
        <div>
            {/* <input className= "sort-box container"></input>
            <button>Sort by</button> */}
            <label className="filter-by"></label>
            <select onChange={handleOnChange} name="movies" id="movies-select" >
                <option value="">Filter By</option>
                <option value="title.asc">Alphabets</option>
                <option value="vote_average.desc">Rating</option>
                <option value="primary_release_date.desc">Release Date</option>
                <option value="vote_count.desc">Most Votes</option>
                <option value="revenue.desc">Revenue</option>



            </select>
        </div>
    )
}
export default FilterBy;
