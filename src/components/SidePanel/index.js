import React, { Component } from 'react';

import './style.css';

class SidePanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelOpen: true,
      sequenceOpen: false
    };
  }

  toggleSidePanel() {
    this.setState({ panelOpen: !this.state.panelOpen });
  }

  toggleSequence() {
    this.setState({ sequenceOpen: !this.state.sequenceOpen });
  }

  render() {
    const panelStatus = this.state.panelOpen ? 'open' : 'closed';
    const panelIcon = this.state.panelOpen ? 'close' : 'menu';
    const sequenceStatus = this.state.sequenceOpen ? 'open' : 'closed';
    const sequenceIcon = this.state.sequenceOpen
      ? 'visibility_off'
      : 'visibility';

    return (
      <div>

      <div className={`side-panel ${panelStatus}`}>
        <div className="button" onClick={() => this.toggleSidePanel()}>
          <i className="material-icons large-icon">{panelIcon}</i>
          <div className="title">OPTIONS</div>
        </div>
        <div className="button" onClick={() => {}}>
          <i className="material-icons large-icon">palette</i>
          <div className="title">COLORS</div>
        </div>
        <div className="button" onClick={() => this.toggleSequence()}>
          <i className="material-icons large-icon">{sequenceIcon}</i>
          <div className="title">SEQUENCE</div>
        </div>
      </div>
        <div className={`sequence ${sequenceStatus}`}>
          sequence
        </div>
      </div>
    );
  }
}

export default SidePanel;
