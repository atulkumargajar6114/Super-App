import React, { useEffect, useState } from 'react'
import bgImage from '../../assets/images/image 13.png';
import styles from './Registration.module.css'
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate=useNavigate();
  const [name,setName] =useState('');
  const [username,setUserName] =useState('');
  const [email,setEmail] =useState('');
  const [mobile,setMobile]=useState('');
  const [consent,setConsent]=useState(false);

  useEffect(()=>{
    if(localStorage.getItem('currentUser')){
      navigate('/genre')
    }
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name || !username || !email || !mobile || !consent){
      alert('Please fill all the fields')
      return;
    }else{
      const currentUser={name,username,email,mobile}
      localStorage.setItem("currentUser",JSON.stringify(currentUser));
      setName('');
      setUserName('');
      setEmail('');
      setMobile('');
      setConsent(false);
    }
    console.log(JSON.parse(localStorage.getItem("currentUser")));
  }
  // console.log(JSON.parse(localStorage.getItem("currentUser")));
  
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.leftHeader}>
          <h1>Discover new things on<br/>SuperApp</h1>
        </div>
        <img src={bgImage} className={styles.bgImage} alt="Registration" />
      </div>
      <div className={styles.right}>
        <div>
          <h2 className={styles.rightHeader}>Super App</h2>
          <h3>create your new account</h3>
        </div>
        <div className={styles.form}>
          <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="text" placeholder='Username' value={username} onChange={(e)=>setUserName(e.target.value)} />
          <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="tel" placeholder='Mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          <div className={styles.checkbox}>
            <input type="checkbox" value={consent} onChange={(e)=>setConsent(e.target.checked)} className={styles.checkbox}/>
            <label htmlFor="">Share my registration data with Superapp</label>
          </div>
          <button type='submit' onClick={handleSubmit}>SIGN UP</button>
        </div>
        <div>
          
          <p>By clicking on Sign up. you agree to Superapp{" "} 
          <span>Terms and Conditions of Use</span>
          </p>
          <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default Registration