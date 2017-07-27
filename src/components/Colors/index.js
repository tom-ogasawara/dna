import React, { Component } from 'react';

import './style.css';

class Colors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [1, 1, 1, 1]
    };
  }

  renderCell(color, selected) {
    const selectedClass = selected ? 'selected' : '';

    return (
      <div className={`cell ${selectedClass}`} style={{ background: color }} />
    );
  }

  renderRow(label, colors) {
    const selected = this.state.selected;

    return (
      <div className="row">
        <div className="title">{label}</div>
        {this.renderCell(colors[0], selected)}
        {this.renderCell(colors[1], selected)}
        {this.renderCell(colors[2], selected)}
        {this.renderCell(colors[3], selected)}
      </div>
    );
  }

  renderCells() {
    const colorMatrix = [
      [
        'rgb(231, 170, 169)',
        'rgb(210, 132, 130)',
        'rgb(233, 186, 155)',
        'rgb(239, 172, 126)'
      ],
      [
        'rgb(239, 215, 154)',
        'rgb(241, 210, 108)',
        'rgb(228, 228, 128)',
        'rgb(211, 211, 79)'
      ],
      [
        'rgb(156, 198, 192)',
        'rgb(109, 161, 156)',
        'rgb(177, 206, 208)',
        'rgb(101, 170, 177)'
      ],
      [
        'rgb(142, 199, 141)',
        'rgb(83, 177, 95)',
        'rgb(197, 196, 193)',
        'rgb(165, 166, 162)'
      ]
    ];
    colorMatrix.map(row => {
      return ({});
    });
  }

  render() {
    const colorMatrix = [
      [
        'rgb(231, 170, 169)',
        'rgb(210, 132, 130)',
        'rgb(233, 186, 155)',
        'rgb(239, 172, 126)'
      ],
      [
        'rgb(239, 215, 154)',
        'rgb(241, 210, 108)',
        'rgb(228, 228, 128)',
        'rgb(211, 211, 79)'
      ],
      [
        'rgb(156, 198, 192)',
        'rgb(109, 161, 156)',
        'rgb(177, 206, 208)',
        'rgb(101, 170, 177)'
      ],
      [
        'rgb(142, 199, 141)',
        'rgb(83, 177, 95)',
        'rgb(197, 196, 193)',
        'rgb(165, 166, 162)'
      ]
    ];

    return (
      <div className="colors">
        <div className="title">COLORS</div>
        <div className="content">
          {this.renderRow("A", colorMatrix[0])}
          {this.renderRow("C", colorMatrix[1])}
          {this.renderRow("G", colorMatrix[2])}
          {this.renderRow("T", colorMatrix[3])}
        </div>
      </div>
    );
  }
}

export default Colors;
