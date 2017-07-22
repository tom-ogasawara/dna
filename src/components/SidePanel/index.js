import React, { Component } from 'react';

import './style.css';

class SidePanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelOpen: true
    };
  }

  toggleSidepanel() {
    this.setState({ panelOpen: !this.state.panelOpen });
    console.log('this.state: ', this.state);
  }

  render() {
    const panelStatus = this.state.panelOpen ? "open" : "closed";
    console.log('panelStatus: ', panelStatus);
    return (
      <div className={`side-panel ${panelStatus}`}>
        <div className="toggle-button" onClick={() => this.toggleSidepanel()}>

        </div>
        Side Panel
      </div>
    );
  }
}

export default SidePanel;
