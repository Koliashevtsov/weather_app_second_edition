import React from 'react';

import './main-indicators.scss';

const MainIndicators = (props) => {
  const { temperature, date, description } = props;
  return (
    <div className="main-indicators">
      <div className="temperature" data-testid="temperature">
        {temperature}&deg;
      </div>
      <div className="date" data-testid="date">
        {date}
      </div>
      <div className="description" data-testid="description">
        {description}
      </div>
    </div>
  );
}
export default MainIndicators;

MainIndicators.defaultProps = {
  temperature: '+10',
  date: 'Thursday, 8 July',
  description: 'cloudly'
}
