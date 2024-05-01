import React, { useEffect, useState } from 'react'
import styles from './HomePage.module.css';
// import UserAvatar from '../../assets/data/image 14.png';
import axios from 'axios';
import UserWidget from '../../components/UserWidget';
import NewsWidget from '../../components/NewsWidget';
import WeatherWidget from '../../components/WeatherWidget';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const NEWS_API=process.env.REACT_APP_NEWS_API_KEY;
  const WEATHER_API=process.env.REACT_APP_WEATHER_API_KEY;
  const [user,setUser]=useState();
  const [selectedGenres,setSelectedGenres]=useState([]);
  const genres=[
    {
      title:"Action",
    },
    {
      title:"Drama",
    },
    {
      title:"Romance",
    },
    {
      title:"Thriller",
    },
    {
      title:"Western",
    },
    {
      title:"Horror",
    },
    {
      title:"Fantasy",
    },
    {
      title:"Music",
    },
    {
      title:"Fiction",
    }
  ]
  const [weather,setWeather]=useState();
  const [news,setNews]=useState();
  const navigate=useNavigate();
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('currentUser')));
    setSelectedGenres(JSON.parse(localStorage.getItem('selectedGenres')));
    fetchWeatherData();
    fetchNewsData();
  },[])
  
  const fetchWeatherData= async ()=>{
    const {data , status}= await axios.get(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API}`);
    
    if(status==200){
      setWeather(data.current);
      // console.log(data);
    }
  }
  const fetchNewsData= async ()=>{
    const {data,status}=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API}`)
    if(status==200){
      setNews(data.articles[0]);
    }
  }

  

  // useEffect(()=>{

  //     // fromatDate();
  //     // console.log(weather.condition.text,
  //     //   weather.gust_kph,
  //     //   weather.humidity,
  //     //   weather.pressure_mb,
  //     //   weather.temp_c,
  //     //   weather.wind_kph);
    
  //   // console.log(weather)
  //   console.log(news)
  //   // if(weather){
  //   //   const {condition,pressure_mb,temp_c,wind_kph,}=weather;
  //   //   console.log(condition,pressure_mb,temp_c,wind_kph);
  //   // }
  // },[weather,news])
  
  // useEffect(()=>{
  //   // genres.map((genre,index)=>{
  //   //   if(selectedGenres.includes(index)){
  //   //     console.log(genre);
  //   //   }
  //   // })
  //   // selectedGenres.map((genre)=>{
  //   //   console.log(genres[genre]);
  //   // })
  //   // console.log(user);
  // },[selectedGenres,user]);
  const handleNext=()=>{
    navigate('/dashboard')
  }
  
  return (
    <div className={styles.page}>
      <div className={styles.left}>
      
        {user && (
          <UserWidget user={user} selectedGenres={selectedGenres}/>
        )}
        {weather && (<WeatherWidget weather={weather}/>)}
      
      </div>
      <div className={styles.right}>
        {news && (<NewsWidget news={news}/>)}
      </div>
      <button className={styles.NextButton} onClick={handleNext}>Next Page</button>
    </div>
  )
}

export default HomePage;
