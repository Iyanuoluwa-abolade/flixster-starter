import './FilterBy.css'

function FilterBy({handleOnChange}) {
    return (
        <div>

            <label className="filter-by"></label>
            <select onChange={handleOnChange} name="movies" id="movies-select" >
                <option value="">Filter By</option>
                {genres && genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}



            </select>
        </div>
    )
}
export default FilterBy;
