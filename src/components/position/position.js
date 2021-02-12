import React from 'react';

import './position.scss';

import { IconPlace } from '../icons';

const Position = (props) => {
  const { cityName } = props;
  return (
    <div className="position">
      <IconPlace/>
      <span className="text">{cityName}, Ukraine</span>
    </div>
  );
}
export default Position;
