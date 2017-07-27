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
      menuOpen: false,
      optionsOpen: false,
      colorsOpen: true,
      sequenceOpen: false
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
    const menuOpen = this.state.menuOpen;
    const optionsOpen = this.state.optionsOpen;
    const colorsOpen = this.state.colorsOpen;
    const sequenceOpen = this.state.sequenceOpen;

    return (
      <div>
        <div className={`menu ${menuOpen ? 'open' : 'closed'}`}>
          <MenuButton
            handleClick={() => this.togglePanels('menu')}
            iconName={menuOpen ? 'close' : 'menu'}
            title="MENU"
          />
          <MenuButton
            handleClick={() => this.togglePanels('options')}
            iconName={optionsOpen ? 'close' : 'settings'}
            title="OPTIONS"
          />
          <MenuButton
            handleClick={() => this.togglePanels('colors')}
            iconName={colorsOpen ? 'close' : 'palette'}
            title="COLORS"
          />
          <MenuButton
            handleClick={() => this.togglePanels('sequence')}
            iconName={sequenceOpen ? 'visibility_off' : 'visibility'}
            title="SEQUENCE"
          />
        </div>
        <div className={`right-menu ${optionsOpen ? 'open' : 'closed'}`}>
          <Options />
        </div>
        <div className={`right-menu ${colorsOpen ? 'open' : 'closed'}`}>
          <Colors />
        </div>
        <div className={`sequence ${sequenceOpen ? 'open' : 'closed'}`}>
          <Sequence />
        </div>
      </div>
    );
  }
}

export default Menu;
