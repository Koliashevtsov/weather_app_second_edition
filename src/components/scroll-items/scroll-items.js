import React from 'react';

import { IconRect } from '../icons';

import './scroll-items.scss';

const ScrollItems = (props) => {
  const { countOffsets, activeOffsetIdx, handleClick } = props;

  return (
    <div className="scroll-items">
      {
        [...Array(countOffsets)].map((item, idx) => {
          return (
            <IconRect
              idx={idx}
              activeOffsetIdx={activeOffsetIdx}
              onClick={handleClick}/>
          );
        })
      }
    </div>
  );
}
export default ScrollItems;
