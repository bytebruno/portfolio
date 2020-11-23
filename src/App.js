import logo from './logo.svg';
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.min.css";

import NavMenu from './components/NavMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NavMenu />
    </div>
  );
}

export default App;
