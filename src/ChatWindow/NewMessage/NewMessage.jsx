import styles from "./NewMessage.module.css";

import addMessage from "../../Assets/addMessage.png";
import sendMessage from "../../Assets/sendMessage.png";

function NewMessage() {
  const prevBtn = (
    <section className={styles.messageInput}>
      <img
        className={styles.messageBtn}
        src={addMessage}
        alt="addMsg"
      />
      Type Message Here
      <img
        className={styles.messageBtn}
        src={sendMessage}
        alt="sendMesg"
        s
      />
    </section>
  );

  return (
    <section className={styles.messageInput}>
      <input type="text" placeholder="Type Message Here" />
    </section>
  );
}

export default NewMessage;
