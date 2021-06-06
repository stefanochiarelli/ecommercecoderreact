import logo from './tenor.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Empezanzdo con react por Stefa Chiarelli
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clickeamo o no ?)
        </a>
      </header>
    </div>
  );
}

export default App;
