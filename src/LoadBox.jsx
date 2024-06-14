import './LoadBox.css'

function LoadBox(props) {
    return (
        <div className= "load-box">
            <button onClick={props.handleLoadMore}>Load more</button>
        </div>
    )
}
export default LoadBox;
