import React, { Component } from 'react';

import SequenceTab from './SequenceTab';
import './style.css';

class Sequence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dNASelected: true,
      dBNSelected: true
    };
  }

  selectTab(tabType) {
    switch (tabType) {
      case 'dna':
        this.setState({
          dNASelected: true,
          dBNSelected: false
        });
        break;
      case 'dbn':
        this.setState({
          dNASelected: false,
          dBNSelected: true
        });
        break;
      case 'both':
        this.setState({
          dNASelected: true,
          dBNSelected: true
        });
        break;
      default:
        console.log('Please pass a valid tab type');
    }
  }

  render() {
    const mockSequence =
      'CAGCACGACACUAGCAGUCAGUGUCAGACUGCAWACAGCACGACACUAGCAGUCAGUGUCAGACUGCAWACAGCACGACACUAGCAGUCAGUGUCAGACUGCAWA';
    const mockDBNSequence =
      '..(((((...(((((...(((((...(((((.....)))))...))))).....(((((...(((((.....)))))...))))).....)))))...)))))..';
    const dNASelected = this.state.dNASelected;
    const dBNSelected = this.state.dBNSelected;
    const dNAStatus = dNASelected ? '' : 'closed';
    const dBNStatus = dBNSelected ? '' : 'closed';

    return (
      <div className="sequence-container">
        <div className="title-tabs">
          <SequenceTab
            title="Display All"
            active={dNASelected && dBNSelected}
            handleClick={() => this.selectTab('both')}
          />
          <SequenceTab
            title="DNA Sequence"
            active={dNASelected && !dBNSelected}
            handleClick={() => this.selectTab('dna')}
          />
          <SequenceTab
            title="2D Representation"
            active={!dNASelected && dBNSelected}
            handleClick={() => this.selectTab('dbn')}
          />
        </div>
        <div className="display-container">
          <div className={`display ${dNAStatus}`}>
            {mockSequence}
          </div>
          <div className={`display ${dBNStatus}`}>
            {mockDBNSequence}
          </div>
        </div>
      </div>
    );
  }
}

export default Sequence;
