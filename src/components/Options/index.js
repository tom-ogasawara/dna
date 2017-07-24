import React, { Component } from 'react';

import './style.css';

class Options extends Component {
  render() {
    return (
      <div className="options">
        <div className="section">
          <div className="title">LINE WIDTH</div>
          <div className="content">
            Line width options go here
          </div>
        </div>
        <div className="section">
          <div className="title">LABEL FONT</div>
          <div className="content">
            Font option go here
          </div>
        </div>
      </div>
    );
  }
}

export default Options;
