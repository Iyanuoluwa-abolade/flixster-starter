import './SideBar.css'

function SideBar(props) {

    let favorites = props.favorites;
    let watched = props.watched;

    console.log(favorites);
    console.log(watched);

    return (
        <div className='side-bar'>
            <h3>Favorites</h3>
            {
                favorites.map((item, index) => {

                    return (
                        <div key={index}>

                            <p>{item.original_title}</p>

                            <img src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} alt="movie-img" width = '200'/>

                        </div>

                    );
                })
            }

            <h3>Watched</h3>
            {
                watched.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.original_title}</p>
                            <img src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} alt="movie-img" width = '200'/>
                        </div>
                    );
                })
            }
        </div>
    )
}
export default SideBar;
