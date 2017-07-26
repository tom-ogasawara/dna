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
      nodes.push({ id: i, label: mockSequence[i] });
    }
    console.log('nodes: ', nodes);
    return nodes.map(node => {
      return (
        <ForceGraphNode
          key={node.id}
          node={{ id: node.id, label: node.label }}
          fill="white"
        />
      );
    });
  }

  renderLinks(mockSequence, mockDBNSequence) {
    let links = [];
    for (let i = 0; i < mockSequence.length - 1; i++) {
      links.push({ source: i, target: i + 1 });
    }
    console.log('links: ', links);
    return links.map(link => {
      return (
        <ForceGraphLink link={{ source: link.source, target: link.target }} />
      );
    });
  }

  renderConnectors(mockDBNSequence) {
    let fromNodes = [];
    let toNodes = [];
    let connectors = [];
    for (let i = 0; i < mockDBNSequence.length - 1; i++) {
      if (mockDBNSequence[i] === '(') {
        fromNodes.push(i);
      } else if (mockDBNSequence[i] === ')') {
        connectors.push({ source: fromNodes[fromNodes.length - 1], target: i });
        fromNodes.pop();
      }
    }
    // console.log('fromNodes: ', fromNodes);
    // console.log('toNodes: ', toNodes);
    console.log('connectors: ', connectors);
    return connectors.map(connector => {
      return (
        <ForceGraphLink
          link={{ source: connector.source, target: connector.target }}
        />
      );
    });
  }

  render() {
    const mockSequence = 'CAGCACGACA';
    const mockDBNSequence = '..((...))..';

    return (
      <div className="visualization">
        <InteractiveForceGraph
          animation
          strength={1}
          simulationOptions={{ height: 300, width: 300 }}
          labelAttr="label"
          onSelectNode={node => console.log(node)}
          highlightDependencies
        >
          {this.renderNodes(mockSequence)}
          {this.renderLinks(mockSequence, mockDBNSequence)}
          {this.renderConnectors(mockDBNSequence)}
        </InteractiveForceGraph>
      </div>
    );
  }
}

export default Visualization;

//   {this.renderLinks(mockSequence, mockDBNSequence)}
// {this.renderFirstNode()}
// {this.renderSecondNode()}
