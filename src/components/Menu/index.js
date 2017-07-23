import React, { Component } from 'react';
import Sequence from '../Sequence';
import MenuButton from '../MenuButton';
import './style.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: true,
      optionsOpen: false,
      sequenceOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.toggleSequence = this.toggleSequence.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  toggleOptions() {
    this.setState({ optionsOpen: !this.state.optionsOpen });
  }

  toggleSequence() {
    this.setState({ sequenceOpen: !this.state.sequenceOpen });
  }

  render() {
    const menuStatus = this.state.menuOpen ? 'open' : 'closed';
    const optionsStatus = this.state.optionsOpen ? 'open' : 'closed';
    const sequenceStatus = this.state.sequenceOpen ? 'open' : 'closed';
    const menuIcon = this.state.menuOpen ? 'close' : 'menu';
    const optionsIcon = this.state.optionsOpen ? 'close' : 'settings';
    const sequenceIcon = this.state.sequenceOpen
      ? 'visibility_off'
      : 'visibility';

    return (
      <div>
        <div className={`menu ${menuStatus}`}>
          <MenuButton
            handleClick={this.toggleMenu}
            iconName={menuIcon}
            title="OPTIONS"
          />
          <MenuButton
            handleClick={this.toggleOptions}
            iconName={optionsIcon}
            title="OPTIONS"
          />
          <MenuButton
            handleClick={() => {}}
            iconName={'palette'}
            title="COLORS"
          />
          <MenuButton
            handleClick={this.toggleSequence}
            iconName={sequenceIcon}
            title="SEQUENCE"
          />
        </div>
        <div className={`options ${optionsStatus}`}>
          options
        </div>
        <div className={`sequence ${sequenceStatus}`}>
          <Sequence />
        </div>
      </div>
    );
  }
}

export default Menu;
