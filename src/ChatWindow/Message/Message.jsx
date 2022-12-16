import styles from './Message.module.css';

function Message({userPic, username, msg}) {
  return (
    <div className={styles.msg}>
      <div className={styles.profilePic}>
        <img src={userPic} alt="profile"/>
      </div>
      <div className={styles.msgBody}>
        <h4>{username}</h4>
        <p>{msg}</p>
      </div>
    </div>
  )
}

export default Message;