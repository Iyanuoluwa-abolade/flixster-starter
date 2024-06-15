import './MovieList.css'
import MovieCard from '../MovieCard Component/MovieCard.jsx'


function MovieList(props) {
  const movies = props.movies;


  function box(movie, index) {
    return (
      <MovieCard
        movie={movie}
        key={movie.index}
        img={movie.poster_path}
        title={movie.original_title}
        rating={movie.vote_average}
        handleMovieSelect={props.handleMovieSelect}
        handleWatched={props.handleWatched}
        handleFavorite={props.handleFavorite}

      />
    );
  }

  return (
    <div id="movie-list">
      {movies.map((movie, index) => box(movie, index))}
    </div>
  );
}

export default MovieList;
