import React, { Component } from 'react';

const MenuButton = props => {
  const {
    handleClick,
    iconName,
    title
  } = props;

  return (
    <div className="button" onClick={() => handleClick()}>
      <i className="material-icons large-icon">{iconName}</i>
      <div className="title">{title}</div>
    </div>
  );
};

export default MenuButton;
