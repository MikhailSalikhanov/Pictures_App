import empty_heart from "./img/empty_heart.png"
import full_heart from "./img/full_heart.png"

export default function Picture (props){

    let isFavorite = props.favorite.includes(props.url) 

    return <div className='picture_container'>
                <img className='image' src={props.url + ".webp"} 
                    onClick={()=>{props.setIsModalActive(true) 
                                    props.setModalContent(props.url)}}  />
                {isFavorite 
                    ? <img className="heart" src={full_heart} onClick={e=>{props.del(props.url)}} /> 
                    : <img className="heart" src={empty_heart} onClick={e=>{props.add(props.url)}} />
                }
           </div>
}