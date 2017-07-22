import React, { Component } from 'react';

import './App.css';
import SidePanel from './components/SidePanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Header
        </div>
        <SidePanel></SidePanel>
        
        Body
      </div>
    );
  }
}

export default App;
