import React from 'react';

import './day-item.scss';

import { IconPartlyCloudly } from '../icons';

const DayItem = (props) => {
  const { description, temperature1, temperature2, date, isActive } = props;
  const clazzName = isActive ? 'active' : '';
  return (
    <div className={`day-item ${clazzName}`} data-testid="background-color-test">
      <div className="description" data-testid="description">
        {description}
      </div>
      <div className="icon">
        <IconPartlyCloudly/>
      </div>
      <div className="temperature" data-testid="temperature">
        {temperature1}&deg; {temperature2}&deg;
      </div>
      <div className={`date ${clazzName}`} data-testid="date">
        {date}
      </div>
    </div>
  );
}
export default DayItem;

DayItem.defaultProps = {
  description: 'cloudly',
  temperature1: '+18',
  temperature2: '+20',
  date: '7 jul'
}
