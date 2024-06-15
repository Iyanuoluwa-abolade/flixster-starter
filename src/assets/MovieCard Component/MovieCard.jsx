import './MovieCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function MovieCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatched, setIsWatched] = useState(false);

  function handleClick(){
    console.log(props.movie)
    props.handleMovieSelect(props.movie)
  }

  function handleFavoriteClick(e){
    e.stopPropagation()
    setIsFavorite(!isFavorite);
    props.handleFavorite(props.movie)
  }

  function handleWatchedClick(e){
    e.stopPropagation()
    setIsWatched(!isWatched);
    props.handleWatched(props.movie);

  }
  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={'https://image.tmdb.org/t/p/w500' + props.img} alt="movie-img"/>
      <p>{props.title}</p>
      <p className="movie-rating">Rating: <span className='orange-star'>&#x2605;</span>{props.rating}</p>

      <FontAwesomeIcon
        icon={faHeart}
        className="star-icon"
        style={{ color: isFavorite ? "coral" : "white" }}
        onClick={handleFavoriteClick}
      />
      <FontAwesomeIcon
        icon={faEye}
        className="eye-icon"
        style={{ color: isWatched ? "coral" : "white" }}
        onClick={handleWatchedClick}
      />
    </div>
  )
}

export default MovieCard;
