import './MovieModal.css';
import { useState } from 'react';


function MovieModal({movie, onClose}) {
    const [trailerUrl, setTrailerUrl] = useState("");


const getModalVideo = async (movieId) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const videosUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

    const trailerUrl = await fetch(videosUrl)
      .then((response) => response.json())
      .then((response) =>
        response.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        )
      )
      .then((trailer) => `https://www.youtube.com/embed/${trailer.key}`)
      .catch((error) => {
        console.error("Error fetching movie trailer:", error);
      });


    setTrailerUrl(trailerUrl);
  };

const Genres = {
    28:"Action",
    12:"Adventure",
    16:"Animation",
    35:"Comedy",
    80:"Crime",
    99:"Documentary",
    18:"Drama",
    10751:"Family",
    14:"Fantasy",
    36:"History",
    27:"Horror",
    10402:"Music",
    9648:"Mystery",
    10749:"Romance",
    878:"Science Fiction",
    10770:"TV Movie",
    53:"Thriller",
    10752:"War",
    37:"Western",
}
function mapGenres(genres) {
    return genres.map(genre => Genres[genre]).join(', ');
}

  useState(() => {
    getModalVideo(movie.id);
  }, [movie]);

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`, backgroundSize: "cover", backgroundPosition: "center"}}>

        <button onClick={onClose} className="modal-close-button"
            type= "button"
            aria-label="Close modal"
        >
            <span aria-hidden="true">&times;</span>
        </button>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Genres: {mapGenres(movie.genre_ids)} </p>
        <p>Release Date: {movie.release_date}</p>
        <p>Overview: {movie.overview}</p>

        <iframe
        src={trailerUrl}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Movie Trailer"
        className="modal-movie-trailer"
        height = '300'
        width = '600'
        ></iframe>
      </div>
    </div>
  );
}



export default MovieModal;
