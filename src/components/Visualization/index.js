import React, { Component } from 'react';
// import * as d3 from 'd3';
// import d3Force from 'd3-force';
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink
} from 'react-vis-force';

class Visualization extends Component {
  render() {

    return (
      <InteractiveForceGraph
        simulationOptions={{ height: 300, width: 300 }}
        labelAttr="label"
        onSelectNode={node => console.log(node)}
        highlightDependencies
      >
        <ForceGraphNode
          node={{ id: 'first-node', label: 'First node' }}
          fill="white"
        />
        <ForceGraphNode
          node={{ id: 'second-node', label: 'Second node' }}
          fill="white"
        />
        <ForceGraphLink
          link={{ source: 'first-node', target: 'second-node' }}
        />
      </InteractiveForceGraph>
    );
  }
}

export default Visualization;
