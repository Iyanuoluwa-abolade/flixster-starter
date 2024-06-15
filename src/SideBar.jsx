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
                        <p>{item.original_title}</p>
                    );
                })
            }

            <h3>Watched</h3>
            {
                watched.map((item, index) => {
                    return (
                        <p>{item.original_title}</p>
                    );
                })
            }
        </div>
    )
}
export default SideBar;
