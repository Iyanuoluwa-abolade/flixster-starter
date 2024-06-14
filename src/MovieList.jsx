/* eslint-disable react/prop-types */
import './MovieList.css'
import MovieCard from './MovieCard.jsx'

// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function MovieList(props) {
  const movies = props.movies;

  // const imgURL = 'https://image.tmdb.org/t/p/w500'

  // called objext destructuring
  // const {poster_path, original_title, vote_average} = movies;

  function box(movie, index) {
    return (
      <MovieCard
        movie={movie}
        key={movie.index}
        img={movie.poster_path}
        title={movie.original_title}
        rating={movie.vote_average}
        handleMovieSelect={props.handleMovieSelect}
        // onClick={() => openModal(movie)}
      />
    );
  }

  return (
    <div id="movie-list">
      {/* <img src={imgURL + movies[0].poster_path} /> */}

      {movies.map((movie, index) => box(movie, index))}
    </div>
  );
}

export default MovieList;
