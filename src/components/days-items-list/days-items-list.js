import React from 'react';

import './days-items-list.scss';

import DayItem from '../day-item';

const DaysItemsList = () => {
  return (
    <div className="days-items-list">
      <ul className="items-list">
        <DayItem/>
        <DayItem/>
        <DayItem isActive={true}/>
        <DayItem/>
        <DayItem/>
      </ul>
    </div>
  );
}
export default DaysItemsList;
