import { useState, useEffect } from 'react'
import './App.css'
import SearchBox from './SearchBox'
import SortBox from './SortBox'
import LoadBox from './LoadBox'
import Header from './Header'
import MovieList from './MovieList'
import NowPlaying from './NowPlaying'
import MovieModal from './MovieModal'
import SideBar from './SideBar'
import FilterBy from './FilterBy'



const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [favorites, setFavorites] = useState([])
  const [watched, setWatched] = useState([])


  const API_KEY = import.meta.env.VITE_API_KEY
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer' + import.meta.env.VITE_ACCESS_TOKEN
  //     // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODhmYmU1MmE2ZWE2M2VkZWJiNmZiYWM3MzIyOTQxMyIsInN1YiI6IjY2Njc2NTkzYzE0MjAyNWQ2MTE1ZDgzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DpV2hMY-KZPblu1wTT0VXePb5t0HPQh33-yDClEIvqo'
  //   }
  // };
  const fetchMovies = () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
    if (sortBy!==""){
      console.log('sortBy', sortBy)
      url += `&sort_by=${sortBy}`
    }
    let tempMovies = []
    if(page !== 1){
      tempMovies = movies;

    }

    fetch(url)
      .then(response => response.json())
      .then(response => { setMovies(tempMovies.concat(response.results)) })
      .catch(err => console.error(err));
  };

  const handleSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&page=1&include_adult=false&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  };




  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);

    console.log('movies in App', movies);
  };

  const handleNowPlaying = () => {
    fetchMovies()
  }

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const sortChange = (event) => {
    console.log(event.target.value);
    setSortBy(event.target.value);
    setPage(1);
  }

  const handleFavorite = (movie) => {
    setFavorites(prevFavorites => [...prevFavorites, movie]);
  };

  const handleWatched = (movie) => {
    setWatched(prevWatched => [...prevWatched, movie]);
  };

  useEffect(() => {
    fetchMovies();
  }, [page, sortBy]);

  return (
    <div className="App">
      <Header />

      <div className="styles">
        <SearchBox handleSearch={handleSearch} searchQuery={searchQuery} />

        {/* // setSearchQuery={setSearchQuery}  */}
        <NowPlaying handleNowPlaying={handleNowPlaying} />
        <SortBox handleOnChange={sortChange} />
        <FilterBy/>
      </div>

      <div style={{ display: "flex", flexDirection: "row"}}>
        <SideBar favorites={favorites} watched={watched}/>

        <MovieList movies={movies} handleMovieSelect={handleMovieSelect} />

      </div>

      {isOpen && (
        <MovieModal
          movie={selectedMovie}
          onClose={handleModalClose}
        />
      )}
      <LoadBox handleLoadMore={handleLoadMore} />
      <footer className="footer">
        <p> Created by Iyanuoluwa Fagbamila</p>
      </footer>

    </div>

  );


}
export default App;
