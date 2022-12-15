import React from "react";
import styles from './Footer.module.css'
import footerImage from '../Assets/footerImage.png'

function Footer() {

  return (
    <div className={styles.footerContent}>
      
      <h1 className={styles.footerMsg}>Join Chatty Today!</h1>
      <img
      className={styles.footerImage} 
        alt="people" 
        src={footerImage}
      />
      <button 
        type="button" 
        className={styles.footerBtn}>
          Join Now!
      </button>
    </div>
  )
}

export default Footer; 