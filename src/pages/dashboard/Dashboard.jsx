import React, { useEffect,useState } from 'react'
import styles from './Dashboard.module.css'
import NotesWidget from '../../components/NotesWidget'
import CountDownWidget from '../../components/CountDownWidget'
import NewsWidget from '../../components/NewsWidget'
import axios from 'axios'
import WeatherWidget from '../../components/WeatherWidget'
import { genres } from '../../assets/data/genres'
import UserWidget from '../../components/UserWidget'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
  const NEWS_API=process.env.REACT_APP_NEWS_API_KEY;
  const WEATHER_API=process.env.REACT_APP_WEATHER_API_KEY;
  const [user,setUser]=useState();
  const [selectedGenres,setSelectedGenres]=useState([]);
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
    try {
      const {data , status}= await axios.get(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API}`);
    
      if(status==200){
        setWeather(data.current);
        
      }
    } catch (error) {
      console.log('Error fetching weather data:', error)
    }
  }
  const fetchNewsData= async ()=>{
    try {
      const {data,status}=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API}`)
      if(status==200){
        setNews(data.articles[0]);
      }
    } catch (error) {
      console.log('Error fetching news data:', error)
    }
  }
  
  const handleNext=()=>{
    navigate('/promotion')
  }
  
  
  
  return (
    <div className={styles.page}>
      <div className={styles.container}>
      
        <div className={styles.userWidget}>{user && (
          <UserWidget user={user} selectedGenres={selectedGenres}/>
        )}</div>
        <div className={styles.weatherWidget}><WeatherWidget weather={weather} /></div>
        <div className={styles.timerWidget}><CountDownWidget/></div>
        <div className={styles.notesWidget}><NotesWidget/></div>
        <div className={styles.newsWidget}>{news && <NewsWidget news={news}/>}</div>
        <button className={styles.NextButton} onClick={handleNext}>Next Page</button>
      </div>
     
    </div>
  )
}

export default Dashboard