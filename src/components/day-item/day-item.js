import React from 'react';
import { DateTime } from 'luxon';

import './day-item.scss';

import { IconPartlyCloudly } from '../icons';

const DayItem = (props) => {
  const { item, activeDate, changeActiveDate } = props;
  const { description, minTemp, maxTemp, date } = item;
  const clazzName = new Date(date).getDate() === new Date(activeDate).getDate() ? 'active' : '';

  function handleClick(date) {
    changeActiveDate(date)
  }

  return (
    <div className={`day-item ${clazzName}`}
      data-testid="clicked"
      onClick={() => handleClick(date)}>
      <div className="description" data-testid="description">
        {description}
      </div>
      <div className="icon">
        <IconPartlyCloudly/>
      </div>
      <div className="temperature" data-testid="temperature">
        {minTemp}&deg; {maxTemp}&deg;
      </div>
      <div className={`date ${clazzName}`} data-testid="date">
        { DateTime.fromISO(date).toFormat('dd LLL') }
      </div>
    </div>
  );
}
export default DayItem;
