import React from 'react'
import styles from './NewsWidget.module.css'
function NewsWidget({news}) {
  const fromatDate=(date)=>{
    if(date){
      const fromatedDate=new Date(news.publishedAt).toLocaleDateString('en-US',{
        year:'numeric',
        month:'long',
        day:'numeric'
      });
      const fromatedTime=new Date(news.publishedAt).toLocaleTimeString('en-Us',{
        hour:'numeric',
        minute:'numeric',
        hour12:true

      })
      return `${fromatedDate} ${fromatedTime}`;
    }else{
      const fromatedDate=new Date().toLocaleDateString('en-US',{
        year:'numeric',
        month:'long',
        day:'numeric'
      });
      const fromatedTime=new Date().toLocaleTimeString('en-Us',{
        hour:'numeric',
        minute:'numeric',
        hour12:true

      });
      return `${fromatedDate} ${fromatedTime}`;
    }
  }
  return (
    <div className={styles.newsWidget}>
          <div className={styles.header}>
            <img src={news.urlToImage} alt="" />
            <div className={styles.headerText}>
              <h1>{news.title.split("-")[0]}</h1>
              <h3>{fromatDate(news.publishedAt)}</h3>
            </div>
          </div>
          <div className={styles.footer}>{news.description}</div>
    </div>
  )
}

export default NewsWidget;