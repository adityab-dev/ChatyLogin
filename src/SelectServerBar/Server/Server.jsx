import React from "react";

import styles from "./Server.module.css";

function Server({ image }) {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.serverImages}
        src={image}
        alt="server"
      />
    </div>
  );
}

export default Server;
