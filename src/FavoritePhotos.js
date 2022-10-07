import { Link } from "react-router-dom"

export default function FavoritePhotos (props){

    return  <>
            <nav className='nav' >
                <Link to="/">To home page</Link>
                {/* <Link to="/favorites">Show only favorites</Link> */}
            </nav>
            <div className='picturesArray'>
                {props.favoriteArray}
            </div>
    </>     
}