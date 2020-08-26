import React from 'react';

import './hour-item.scss';

import { IconPartlyCloudly } from '../icons';

const HourItem = (props) => {
  const { duration, description, temperature, isActive } = props;
  const clazz = isActive ? 'active' : '';
  return (
    <div className={`hour-item ${clazz}`}>
      <div className={`duration ${clazz}`} data-testid="duration">
        {duration}
      </div>
      <div className="description" data-testid="description">
        {description}
      </div>
      <div className="icon">
        <IconPartlyCloudly/>
      </div>
      <div className="temperature" data-testid="temperature">
        {temperature}&deg;
      </div>
    </div>
  );
}
export default HourItem;

HourItem.defaultProps = {
  duration: '10:00-12:00',
  description: 'cloudly',
  temperature: '+18'
}
