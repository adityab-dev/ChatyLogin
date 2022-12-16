import React from "react";

import styles from "./ChatroomSelectBar.module.css";

import Chatroom from "./Chatroom/Chatroom";

import PartnerLogo from "../Assets/PartnerLogo1.png";

const chatrooms = ["welcome", "rules", "general"];

function ChatroomSelectBar() {
  const header = (
    <header className={styles.headerContent}>
      <img
        className={styles.officialPartnerImg}
        src={PartnerLogo}
        alt="trophy"
      />
      <h3>Chaty Official Sever</h3>
    </header>
  );

  const chatroomList = chatrooms.map((chatroom) => {
    return <Chatroom chatroom={chatroom} />;
  });

  return (
    <div className={styles.selectBar}>
      {header}
      {chatroomList}
    </div>
  );
}

export default ChatroomSelectBar;
