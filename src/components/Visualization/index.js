import React, { Component } from 'react';
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink
} from 'react-vis-force';

import './style.css';

class Visualization extends Component {
  constructor(props) {
    super(props);

    this.state = {
      strength: {
        charge: -100
      }
    };
  }

  renderNodes(mockSequence) {
    let nodes = [];
    for (let i = 0; i < mockSequence.length; i++) {
      let color;
      switch (mockSequence[i]) {
        case 'G':
          color = 'rgb(210, 132, 130)';
          break;
        case 'A':
          color = 'rgb(101, 170, 177)';
          break;
        case 'C':
          color = 'rgb(241, 210, 108)';
          break;
        case 'T':
          color = 'rgb(83, 177, 95)';
          break;
        default:
          color = 'white';
      }
        
      nodes.push({ id: i, label: mockSequence[i], color: color });
    }

    return nodes.map(node => {
      return (
        <ForceGraphNode
          key={node.id}
          node={{ id: node.id, label: node.label }}
          fill={node.color}
        />
      );
    });
  }

  renderLinks(mockSequence, mockDBNSequence) {
    let links = [];

    for (let i = 0; i < mockSequence.length - 1; i++) {
      links.push({ source: i, target: i + 1 });
    }
    // console.log('links: ', links);
    return links.map(link => {
      return (
        <ForceGraphLink link={{ source: link.source, target: link.target }} />
      );
    });
  }

  renderConnectors(mockDBNSequence) {
    let fromNodes = [];
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
    // console.log('connectors: ', connectors);
    return connectors.map(connector => {
      return (
        <ForceGraphLink
          link={{
            source: connector.source,
            target: connector.target
          }}
        />
      );
    });
  }
  createSimulation(options) {}

  render() {
    const mockSequence =
      'CAGCACGACACUAGCAGUCAGUGUCAGACUGCAWACAGCACGACACUAGCAGUCAGUGUCAGACUGCAWACAGCACGACACUAGCAGUCAGUGUCAGACUGCAWA';
    const mockDBNSequence =
      '..(((((...(((((...(((((...(((((.....)))))...))))).....(((((...(((((.....)))))...))))).....)))))...)))))..';
    const { strength } = this.state;

    return (
      <div className="visualization">
        <button
          className="showcase-button"
          onClick={() => this.setState({ strength: Math.random() * 60 - 30 })}
        >
          {' '}REWEIGHT{' '}
        </button>
        <InteractiveForceGraph
          zoom={true}
          strength={strength}
          simulationOptions={{
            height: 300,
            width: 600,
            animate: true,
            strength: strength,
          }}
          labelAttr="label"
          onSelectNode={node => console.log(node)}
          highlightDependencies
        >
          {this.renderLinks(mockSequence, mockDBNSequence)}
          {this.renderNodes(mockSequence)}
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
