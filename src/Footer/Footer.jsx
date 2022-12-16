import React from "react";
import styles from "./Footer.module.css";
import footerImage from "../Assets/footerImage.png";

function Footer() {
  return (
    <div className={styles.footerContent}>
      <div
        className={`${styles.empty} ${styles.equalWidth}`}
      ></div>

      <div
        className={`${styles.footerContentMain} ${styles.equalWidth}`}
      >
        <h1 className={styles.padding}>
          Join Chatty Today!
        </h1>
        <img
          className={`${styles.footerImage} ${styles.padding}`}
          alt="people"
          src={footerImage}
        />
      </div>

      <div
        className={`${styles.footerBtn} ${styles.equalWidth}`}
      >
        <button type="button">Join Now!</button>
      </div>
    </div>
  );
}

export default Footer;
