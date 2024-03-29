import React from 'react';
import logo from './logo.svg';
import './App.css';

import config from "configs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {config.name}
        </p>
      </header>
    </div>
  );
}

export default App;
