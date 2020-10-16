import React from 'react';

import './days-items-list.scss';

import DayItemContainer from '../../containers/day-item-container';

const DaysItemsList = ({list}) => {
  return (
    <div className="days-items-list">
      <ul className="items-list">
        {
          list.map((item, index) => {
            return (
              <li key={index}>
                <DayItemContainer item={item}/>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
export default DaysItemsList;
