import React from 'react';

const IconRect = ({ idx, activeOffsetIdx, onClick }) => {
  const background = idx === activeOffsetIdx ? '#393E46' : '#C4C4C4';
  return (
    <div className="item" key={idx} style={{"line-height": 1}} onClick={() => onClick(idx)}>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="5" height="5" fill={background}/>
      </svg>
    </div>
  );
}
export default IconRect;
