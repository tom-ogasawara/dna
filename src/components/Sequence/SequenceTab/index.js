import React from 'react';

const SequenceTab = (props) => {
  const { title, active, handleClick } = props;
  const activeClass = active ? "isSelected" : "";

  return (
    <div className={`tab ${activeClass}`} onClick={handleClick}>
      {title}
    </div>
  );
};

export default SequenceTab;