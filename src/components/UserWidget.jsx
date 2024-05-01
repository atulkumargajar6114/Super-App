import React from 'react'
import UserAvatar from '../assets/images/image 14.png';
import styles from './UserWidget.module.css';
import {genres} from '../assets/data/genres';

function UserWidget({user,selectedGenres}) {
  return (
    <div className={styles.userWidget}>
            <img src={UserAvatar} alt="user avatar"/>
            <div className={styles.styling}>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
              <h1>{user.username}</h1>
              <div className={styles.genreGrid}>
                {selectedGenres.length>0 &&
                  selectedGenres
                  .filter((genre,index)=> index<4)
                  .map((genre)=>(
                    <div className={styles.pill}>{genres[genre].title}</div>
                  ))
                }
            </div>
            </div>
          </div>
  )
}

export default UserWidget