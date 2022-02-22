import logo from './logo.svg';
import './App.css';
import Number from './component/Number'
import React from 'react';

function App() {
  const [toggle, setToggle] = React.useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {toggle && <Number angka />}
          <button onClick={()=>setToggle(false)}>Hide</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
