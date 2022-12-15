import React from "react";

import styles from './Main.module.css';

import bigChatyLogo from '../Assets/bigChatyLogo.png'

function Main() {
  return (
    <div className={styles.mainContent}>
      <img
        className={styles.footerImg} 
        alt="mascot" 
        src={bigChatyLogo}
      />
      <h1>This is Chatty</h1>
      <h3>A discord ripoff</h3>
    </div>
  )
}

export default Main