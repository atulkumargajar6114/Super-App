import React, { useEffect, useState } from 'react';
import styles from './NotesWidget.module.css';

function NotesWidget() {
  const [note,setNote]=useState();
  useEffect(()=>{
    setNote(localStorage.getItem('note'));
  },[])
  useEffect(()=>{
    if(note){
      localStorage.setItem('note',note.trim());
    }
  },[note])
  return (
    <div className={styles.NotesWidget}>
      <h1 className={styles.header}>All Notes</h1>
      <textarea className={styles.input} type="text" value={note} onChange={(e)=>{setNote(e.target.value)}}/>
    </div>
  )
}

export default NotesWidget