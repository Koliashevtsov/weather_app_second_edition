import React from 'react';

import ErrorBoundry from '../error-boundry';
import HoursItemsListContainer from '../../containers/hours-items-list-container';
import DaysItemsListContainer from '../../containers/days-items-list-container';

const Panels = () => {
  return (
    <ErrorBoundry>
      <HoursItemsListContainer/>
      <DaysItemsListContainer/>
    </ErrorBoundry>
  );
}
export default Panels;
