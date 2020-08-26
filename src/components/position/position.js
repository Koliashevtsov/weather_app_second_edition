import React from 'react';

import './position.scss';

import { IconPlace } from '../icons';

const Position = (props) => {
  const { city, country } = props;
  return (
    <div className="position">
      <IconPlace/>
      <span className="text">{city}, {country}</span>
    </div>
  );
}
export default Position;

Position.defaultProps = {
  city: 'Kyiv',
  country: 'Ukraine'
}
