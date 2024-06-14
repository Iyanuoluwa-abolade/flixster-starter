import './NowPlaying.css'

function NowPlaying() {
    const handleClick = () => {
        window.location.href = '/now-playing';
    };
    return (
        <div className= "now-playing-box">
            <button onClick={handleClick}> Now Playing</button>
        </div>
    )
}
export default NowPlaying;
