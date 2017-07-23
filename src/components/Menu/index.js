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
      colorsOpen: false,
      sequenceOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.toggleColors = this.toggleColors.bind(this);
    this.toggleSequence = this.toggleSequence.bind(this);
  }
// refactor these all into one function, pass it a "panel type" 
// or something to determine which panel to toggle.
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  toggleOptions() {
    this.setState({ optionsOpen: !this.state.optionsOpen });
  }

  toggleColors() {
    this.setState({ colorsOpen: !this.state.colorsOpen });
  }

  toggleSequence() {
    this.setState({ sequenceOpen: !this.state.sequenceOpen });
  }

  render() {
    const menuStatus = this.state.menuOpen ? 'open' : 'closed';
    const optionsStatus = this.state.optionsOpen ? 'open' : 'closed';
    const colorsStatus = this.state.colorsOpen ? 'open' : 'closed';
    const sequenceStatus = this.state.sequenceOpen ? 'open' : 'closed';
    const menuIcon = this.state.menuOpen ? 'close' : 'menu';
    const optionsIcon = this.state.optionsOpen ? 'close' : 'settings';
    const colorsIcon = this.state.colorsOpen ? 'close' : 'palette';
    const sequenceIcon = this.state.sequenceOpen
      ? 'visibility_off'
      : 'visibility';

    return (
      <div>
        <div className={`menu ${menuStatus}`}>
          <MenuButton
            handleClick={this.toggleMenu}
            iconName={menuIcon}
            title="MENU"
          />
          <MenuButton
            handleClick={this.toggleOptions}
            iconName={optionsIcon}
            title="OPTIONS"
          />
          <MenuButton
            handleClick={this.toggleColors}
            iconName={colorsIcon}
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
        <div className={`options ${colorsStatus}`}>
          colors
        </div>
        <div className={`sequence ${sequenceStatus}`}>
          <Sequence />
        </div>
      </div>
    );
  }
}

export default Menu;
