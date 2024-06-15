import './SortBox.css'

function SortBox({handleOnChange}) {
    return (
        <div>
            <label className="movie-sort"></label>
            <select onChange={handleOnChange} name="movies" id="movies-select" >
                <option value="">Sort By</option>
                <option value="title.asc">Alphabets</option>
                <option value="vote_average.desc">Rating</option>
                <option value="primary_release_date.desc">Release Date</option>
                <option value="vote_count.desc">Most Votes</option>
                <option value="revenue.desc">Revenue</option>



            </select>
        </div>
    )
}
export default SortBox;
