import React, { useState } from 'react';

import './hours-items-list.scss';

import HourItemContainer from '../../containers/hour-item-container';

const HoursItemsList = (props) => {
  const { list } = props;

  return (
    <div className="hours-items-list">
      <ul className="items-list">
        {
          list.map(item => {
            return (
              <li key={item.id}>
                <HourItemContainer item={item} />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
export default HoursItemsList;
