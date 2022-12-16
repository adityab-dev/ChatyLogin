import styles from './Chatroom.module.css';

function Chatroom({chatroom}) {
  return (
    <div className={styles.chatroom}>
      {`#${chatroom}`}
    </div>
  )
}

export default Chatroom;