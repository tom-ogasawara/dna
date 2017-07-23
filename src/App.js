import React, { Component } from 'react';

import './App.css';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          DNA Visualization
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
