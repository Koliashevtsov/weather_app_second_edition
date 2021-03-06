import React from 'react';
import { DateTime } from 'luxon';

import './main-indicators.scss';

const MainIndicators = (props) => {
  const { temperature, description, date } = props;
  return (
    <div className="main-indicators">
      <div className="temperature" data-testid="temperature">
        {temperature}&deg;
      </div>
      <div className="date" data-testid="date">
        {DateTime.fromISO(date).toFormat('cccc, d LLL')}
      </div>
      <div className="description" data-testid="description">
        {description}
      </div>
    </div>
  );
}
export default MainIndicators;
