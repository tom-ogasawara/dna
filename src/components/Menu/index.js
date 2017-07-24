import React, { Component } from 'react';

import Colors from '../Colors';
import MenuButton from './MenuButton';
import Options from '../Options';
import Sequence from '../Sequence';
import './style.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: true,
      optionsOpen: true,
      colorsOpen: false,
      sequenceOpen: true
    };
  }

  togglePanels(panelType) {
    switch (panelType) {
      case 'menu':
        this.setState({ menuOpen: !this.state.menuOpen });
        break;
      case 'options':
        if (this.state.colorsOpen) {
          this.setState({ colorsOpen: false });
        }
        this.setState({ optionsOpen: !this.state.optionsOpen });
        break;
      case 'colors':
        if (this.state.optionsOpen) {
          this.setState({ optionsOpen: false });
        }
        this.setState({ colorsOpen: !this.state.colorsOpen });
        break;
      case 'sequence':
        this.setState({ sequenceOpen: !this.state.sequenceOpen });
        break;
      default:
        return;
    }
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
            handleClick={() => this.togglePanels('menu')}
            iconName={menuIcon}
            title="MENU"
          />
          <MenuButton
            handleClick={() => this.togglePanels('options')}
            iconName={optionsIcon}
            title="OPTIONS"
          />
          <MenuButton
            handleClick={() => this.togglePanels('colors')}
            iconName={colorsIcon}
            title="COLORS"
          />
          <MenuButton
            handleClick={() => this.togglePanels('sequence')}
            iconName={sequenceIcon}
            title="SEQUENCE"
          />
        </div>
        <div className={`right-menu ${optionsStatus}`}>
          <Options />
        </div>
        <div className={`right-menu ${colorsStatus}`}>
          <Colors />
        </div>
        <div className={`sequence ${sequenceStatus}`}>
          <Sequence />
        </div>
      </div>
    );
  }
}

export default Menu;
