import React, { useEffect, useState } from 'react'
// import actionBG from '../../assets/actionBG.png'
import styles from './GenrePage.module.css'
import {IoIosWarning} from 'react-icons/io'
import {genres} from '../../assets/data/genres'
import { useNavigate } from 'react-router-dom'
const GenrePage = () => {
  const navigate=useNavigate();
  const[selectedGenres,setSelectedGenres] = useState([]);
  const[lengthWarning,setLengthWarning] =useState(false);

  useEffect(()=>{
    if(selectedGenres.length>=3){
      setLengthWarning(false);
    }
    localStorage.setItem('selectedGenres',JSON.stringify(selectedGenres))
  },[selectedGenres]);

  const bgColors=["#FF5209","#D7A4FF","#148A08","#84C2FF","#902500","#7358FF","#FF4ADE"
  ,"#E61E32","#6CD061"]


  const removeGenre=(index)=>{
    const newGenres=selectedGenres.filter((item)=>item!==index);
    setSelectedGenres(newGenres);
  }
  const selectGenre=(index)=>{
    if (selectedGenres.includes(index)) {
			setSelectedGenres((prev) => prev.filter((item) => item !== index));
		} else {
			setSelectedGenres((prev) => [...prev, index]);
		}
  }
  const handleNext=()=>{
    if(selectedGenres.length<3){
      setLengthWarning(true);
    }else{
      setLengthWarning(false);
      navigate('/homepage')
    }
  }


  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.Header}>
        <h2 className={styles.leftHeader}>Super app</h2>
        <h1 className={styles.leftSubHeader}>Choose your <br /> entertainment <br /> category</h1>
        </div>
        
        <div className={styles.selected}>
          {selectedGenres.map((item,index)=>(
              <div key={item} className={styles.selectedGenre}>
                  {genres[item].title}
                  <button onClick={()=>removeGenre(item)}>X</button>
              </div>
          ))}

        </div>
        {lengthWarning && (<div className={styles.warning}>
          <IoIosWarning/><div>&nbsp;Minimum 3 category required</div>
        </div>)}
        
      </div>
      <div className={styles.right}>
          <div className={styles.genreGrid}>
          {genres.map((genre,index)=>(
              <div key={index} className={styles.genreCard} onClick={()=>selectGenre(index)}
              style={{backgroundColor:bgColors[index]}}>
                <div className={styles.title}>{genre.title}</div>
                <img src={genre.bgImage} alt="background Image"/>
              </div>
            ))}
          </div>
          <button className={styles.NextButton} onClick={handleNext}>Next Page</button>
      </div>
    </div>
  )
}

export default GenrePage;