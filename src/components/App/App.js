import React, { Component } from 'react';
import './App.css';
import Gauge from '../Gauge/Gauge.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Real-time poll</h1>
        </div>
        <Gauge />
      </div>
    );
  }
}

export default App;
