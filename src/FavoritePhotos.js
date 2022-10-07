import { Link } from "react-router-dom"

export default function FavoritePhotos (props){

    return  <>
            <nav className='nav' >
                <Link to="/">To home page</Link>
            </nav>
            <div className='picturesArray'>
                {props.favoriteArray}
            </div>
    </>     
}