import React from "react";

import Server from "./Server/Server";

import styles from "./SelectServerBar.module.css";

import AddServer from "../Assets/addaddServer.png";
import Explore from "../Assets/exploreExplore.png";
import Nlogo from "../Assets/Logo_NGOSNGOS.png";
import ChatyLogo from "../Assets/LogoPurpleChatyLogo.png";
import Elogo from "../Assets/Rectangle7ELogo.png";

const serverImages = [
  Explore,
  Elogo,
  ChatyLogo,
  Nlogo,
  AddServer,
];

function ServerSelectBar() {
  const serverList = serverImages.map((serverImage) => {
    return <Server image={serverImage} />;
  });

  return <div className={styles.bar}>{serverList}</div>;
}

export default ServerSelectBar;
