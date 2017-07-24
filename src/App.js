import React, { Component } from 'react';

import Menu from './components/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <i className="material-icons large-icon">bubble_chart</i>
          <div className="title">DNA Visualization</div>
        </div>
        <div className="app-body">
          <Menu />
          <div className="app-content">
            Body goes here
          </div>
        </div>
      </div>
    );
  }
}

export default App;
