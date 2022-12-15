import './App.css';
import LoginHeader from './LoginHeader/LoginHeader';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  console.clear()
  
  return (
    <div className="App">
      <LoginHeader />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
