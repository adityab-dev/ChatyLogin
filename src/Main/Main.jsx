import React from "react";

import styles from "./Main.module.css";

import bigChatyLogo from "../Assets/bigChatyLogo.png";

function Main() {
  return (
    <div className={styles.mainContent}>
      <img
        className={styles.footerImg}
        alt="mascot"
        src={bigChatyLogo}
      />
      <div className={styles.mainText}>
        <h1>THIS IS CHATY</h1>
        <h3>The Discord Ripoff</h3>
      </div>
    </div>
  );
}

export default Main;
