import React from 'react';
import { DateTime } from 'luxon';

import './day-item.scss';

import { IconPartlyCloudly } from '../icons';

const DayItem = (props) => {
  const { item, activeDate, changeActiveDate } = props;
  const { description, minTemp, maxTemp, date } = item;
  const dateStr = date;
  const clazzName = new Date(dateStr).getDate() === activeDate.getDate() ? 'active' : '';

  function handleClick(dateStr) {
    changeActiveDate(dateStr)
  }

  return (
    <div className={`day-item ${clazzName}`}
      data-testid="clicked"
      onClick={() => handleClick(dateStr)}>
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
        { DateTime.fromISO(dateStr).toFormat('dd LLL') }
      </div>
    </div>
  );
}
export default DayItem;
