import React, { useEffect, useState } from 'react'
import styles from './Promotion.module.css'
import axios from 'axios';
import UserAvatar from '../../assets/images/image 14.png';
import SuggestMovies from './SuggestMovies';
function Promotion() {
  const [results,setResults]=useState();
  const [selectedGenres,setSelectedGenres]=useState([]);
  useEffect(()=>{
    const fetchData=async ()=>{
      const response=await axios.get('https://api.tvmaze.com/shows');
      setResults(response.data);
    }
    fetchData();
    setSelectedGenres(JSON.parse(localStorage.getItem('selectedGenres')));
  },[])
  
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
            <h2>Super App</h2>
            <h4>Entertainment According your Choice</h4>
        </div>
        <img className={styles.avatar} src={UserAvatar} alt="" />
      </div>
      {selectedGenres.map((genre,index)=>(
        <SuggestMovies key={index} index={genre} movies={results}/>
      ))}
    </div>
  )
}

export default Promotion