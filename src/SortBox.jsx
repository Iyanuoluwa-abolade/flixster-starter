import './SortBox.css'

function SortBox({handleOnChange}) {
    return (
        <div>
            {/* <input className= "sort-box container"></input>
            <button>Sort by</button> */}
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


// import './SortBox'
// import { useState } from 'react';
// // function SortBox() {
// const SortBox = ({ handleSort }) => {
//     const [sortBy, setSortBy] = useState(''); // State to hold the sorting criteria
//     const [sortOrder, setSortOrder] = useState('asc'); // State to hold the sort order

//     const handleSortClick = () => {
//       handleSort(sortBy, sortOrder); // Call the handleSort function passed from the parent component
//     };

//     return (
//       <div className="sort-box">
//         {/* <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="">Sort By</option>
//           <option value="title">Title</option>
//           <option value="release_date">Release Date</option>
//           {/* Add more sorting criteria options as needed */}
//         {/* </select> */}
//         <button onClick={handleSortClick}>Sort By</button>
//         <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </select>
//       </div>
//     );
//   };

//   export default SortBox;
