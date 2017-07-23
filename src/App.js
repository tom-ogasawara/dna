import React, { Component } from 'react';

import './App.css';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <i className="material-icons large-icon">home</i>
          <div className="title">DNA Visualization</div>
        </div>
        <Menu />
        <div className="app-body">
          Body goes here
        </div>
      </div>
    );
  }
}

export default App;
