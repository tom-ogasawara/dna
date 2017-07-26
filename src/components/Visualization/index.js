import React, { Component } from 'react';
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink
} from 'react-vis-force';

import './style.css';

class Visualization extends Component {
  renderNodes(mockSequence) {
    let nodes = [];
    for (let i = 0; i < mockSequence.length; i++) {
      nodes.push({key: i, id: i, label: mockSequence[i] });
    }

    return nodes.map(node => {
      return (
        <ForceGraphNode
          key={node.id}
          node={{ key: node.key, id: node.id, label: node.label }}
          fill="white"
        />
      );
    });
  }

  renderLinks(mockSequence, mockDBNSequence) {
    let links = [];
    for (let i = 0; i < mockSequence.length - 1; i++) {
      links.push({ key: i, source: i, target: i + 1 });
    }

    return links.map(link => {
      return (
        <ForceGraphLink key={link.id} link={{ key: link.key, source: link.source, target: link.target }} />
      );
    });
  }

  renderConnectors(mockDBNSequence) {
    let i = 1;
  }

  render() {
    const mockSequence = 'CAGCACGACA';
    const mockDBNSequence = '..((...))..';

    return (
      <div className="visualization">
        <InteractiveForceGraph
          simulationOptions={{ height: 300, width: 300 }}
          labelAttr="label"
          onSelectNode={node => console.log(node)}
          highlightDependencies
        >
          {this.renderNodes(mockSequence)}
          {this.renderLinks(mockSequence, mockDBNSequence)}
        </InteractiveForceGraph>
      </div>
    );
  }
}

export default Visualization;

//   {this.renderLinks(mockSequence, mockDBNSequence)}
// {this.renderFirstNode()}
// {this.renderSecondNode()}
