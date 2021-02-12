import React from 'react';

import './hour-item.scss';

import { IconPartlyCloudly } from '../icons';

const HourItem = (props) => {
  const { item, activeTimeIntervalId, changeActiveHourInterval } = props;
  const { id, description, temperature } = item;
  const interval = id;
  const clazz = activeTimeIntervalId == id ? 'active' : '';

  function handleClick(id){
    changeActiveHourInterval(id)
  }

  return (
    <div className={`hour-item ${clazz}`}
      onClick={() => handleClick(id)}
      data-testid="clicked">
      <div className={`duration ${clazz}`} data-testid="duration">
        {interval}
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
