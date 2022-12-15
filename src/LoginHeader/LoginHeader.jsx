import React from "react";
import styles from './LoginHeader.module.css'
import chatty from '../Assets/LogoChatty.png'

function LoginHeader() {
  return (
    <div className={styles.loginContent}>
      <div className={styles.contentLeft}>
      <h2>Chaty</h2>
      <img 
        src={chatty} 
        alt="small-chatty"
      />
      </div>
   
      <div className={styles.contentRight}>
        <button>sign up</button>
        <button>log In</button>
      </div>
    </div>
  )
}

export default LoginHeader;