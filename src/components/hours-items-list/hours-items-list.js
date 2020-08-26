import React from 'react';

import './hours-items-list.scss';

import HourItem from '../hour-item';

const HoursItemsList = () => {
  return (
    <div className="hours-items-list">
      <ul className="items-list">
        <HourItem/>
        <HourItem isActive={true}/>
        <HourItem/>
        <HourItem/>
        <HourItem/>
        <HourItem/>
      </ul>
    </div>
  );
}
export default HoursItemsList;
