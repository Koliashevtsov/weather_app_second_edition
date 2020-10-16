import React from 'react';

import HoursItemsListContainer from '../../containers/hours-items-list-container';
import DaysItemsListContainer from '../../containers/days-items-list-container';

const Panels = () => {
  return (
    <>
      <HoursItemsListContainer/>
      <DaysItemsListContainer/>
    </>
  );
}
export default Panels;
