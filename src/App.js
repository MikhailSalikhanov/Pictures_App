import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Picture from './Picture';
import {Routes, Route } from "react-router-dom"
import FavoritePhotos from './FavoritePhotos';
import AllPhotos from './AllPhotos';
import Modal from './Modal/Modal';
import useLocalStorage from './hooks/UseLocalStorage'

function App() {
  let [pictures, setPictures] = useState();
  let [isLoading, setIsLoading] = useState(true);
  let [amountOfPictures, setAmountOfPictures] = useState(10)
  let [pageNumber, setPageNumber] = useState(1)
  let [favorite, setFavorite] = useLocalStorage('favorite', [])
  let [isModalActive, setIsModalActive] = useState(false)
  let [modalContent, setModalContent] = useState('')


  // useEffect(()=>{
  //   localStorage.setItem('favorite', JSON.stringify(favorite))
  //   console.log(JSON.parse(localStorage.getItem('favorite')));
    
  // }, [favorite])

  // useEffect(()=>{
  //   let a = JSON.parse(localStorage.getItem('favorite'))
  //   console.log(a);
    
  //   if (localStorage.getItem('favorite').length){
  //     setFavorite(localStorage.getItem('favorite'))
  //   }
  // },[])


  let url = ''
  useEffect(() => {
    setIsLoading(true)
    url = 'https://picsum.photos/v2/list?limit=' + amountOfPictures + "&page=" + pageNumber
    fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              setPictures(result);
              }
            )
            .then(()=>{
              setIsLoading(false)
          })
  }, [amountOfPictures, pageNumber] )

  let picturesArray = []
  
  function addToFavorite (url){
    setFavorite(prevFavorite => [...prevFavorite, url])
  }
  
  function deleteFromFavorite (url){
    setFavorite(prevFavorite => prevFavorite.filter(item => item != url))
  }

  if (!isLoading) {
    picturesArray = pictures.map(picture => <Picture 
        key={picture.id} url={picture.download_url} favorite={favorite}
        add={addToFavorite} del={deleteFromFavorite} 
        setIsModalActive={setIsModalActive} setModalContent={setModalContent} />)
  } 

  let favoriteArray = favorite.map(item => <Picture 
    key={item} url={item} favorite={favorite}
    add={addToFavorite} del={deleteFromFavorite} 
    setIsModalActive={setIsModalActive} setModalContent={setModalContent}/>)

  return (
    <div className="App">
      <Routes>
          <Route path='/favorites' element={<FavoritePhotos favoriteArray={favoriteArray} />} />
          <Route path='/' element={<AllPhotos picturesArray={picturesArray} pageNumber={pageNumber}
                                  setPageNumber={setPageNumber} amountOfPictures={amountOfPictures}
                                  setAmountOfPictures={setAmountOfPictures} favoriteArray={favoriteArray} />} />
          </Routes>
          <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive} setModalContent={setModalContent}>
              <img className='image' src={modalContent} />
          </Modal>
    </div>
  );
}

export default App;
