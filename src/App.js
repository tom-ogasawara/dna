import React, { Component } from 'react';

import './App.css';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Header
        </div>
        <Menu></Menu>

        Body
      </div>
    );
  }
}

export default App;
