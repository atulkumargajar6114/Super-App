import React, { useEffect, useState } from 'react'
import { genres } from '../../assets/data/genres';
import styles from './SuggestMovies.module.css'
function SuggestMovies({index,movies}) {
  const [genre,setGenre]=useState();
  const [selectedMovies,setSelectedMovies]=useState();
  useEffect(()=>{
    if(index){
      setGenre(genres[index].title);
    }
  },[index])
  useEffect(()=>{
    const res=movies
    ?.filter((movie)=>movie.genres.includes(genre))
    ?.slice(0,6);
    setSelectedMovies(res);
  },[movies])
  
  return (
    <div className={styles.widget}>
      <h3>{genre}</h3>
      <div className={styles.catalogue}>
        {
          selectedMovies?.map((movie,index)=>movie && (<div key={index}>
            <img src={movie.image.medium} alt="" />
          </div>))
        }
      </div>
    </div>
  )
}

export default SuggestMovies