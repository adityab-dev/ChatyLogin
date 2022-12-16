import React from "react";

import styles from "./ChatWindow.module.css";

import Message from "./Message/Message";

import dp1 from "../Assets/Ellipse9dp1.png";
import dp2 from "../Assets/Ellipse10dp2.png";
import NewMessage from "./NewMessage/NewMessage";

const messageProps = [
  {
    userPic: dp1,
    username: "figmaDesign",
    msg: "Hello! welcome to chaty UI",
  },
  { userPic: dp2, username: "Ileb", msg: "Hi! ty" },
];

function ChatWindow() {
  const messageList = messageProps.map((messageObj) => {
    return (
      <Message
        userPic={messageObj.userPic}
        username={messageObj.username}
        msg={messageObj.msg}
      />
    );
  });

  const header = (
    <header className={styles.header}>
      <h3>#general | Chat</h3>
    </header>
  );

  const main = (
    <main className={styles.main}>
      <div className={styles.messagesContainer}>
        {messageList}
      </div>
    </main>
  );

  return (
    <div className={styles.chatWindow}>
      {header}
      <div className={styles.chatWindowContent}>
        {main}
        <NewMessage />
      </div>
    </div>
  );
}

export default ChatWindow;
