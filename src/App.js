import styles from "./App.module.css";

import ChatroomSelectBar from "./ChatroomSelectBar/ChatroomSelectBar";
import ChatWindow from "./ChatWindow/ChatWindow";
import ServerSelectBar from "./SelectServerBar/SelectServerBar";
import Users from "./Users/Users";

function App() {
  return (
    <div className={styles.App}>
      <ServerSelectBar />
      <ChatroomSelectBar />
      <ChatWindow />
      <Users />
    </div>
  );
}

export default App;
