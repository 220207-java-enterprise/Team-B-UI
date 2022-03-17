import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React, Aji!
        </p>
        <a
          className="App-link"
          href="http://localhost:4001/ers/users"
          target="_blank"
          rel="noopener noreferrer"
        >
          Users
        </a>
      </header>
    </div>
  );
}

export default App;
