import React, { useEffect, useContext } from 'react';

import ClimaCellContext from '../clima-cell-context';

const TestApiComponent = () => {
  const climacellService = useContext(ClimaCellContext);
  const date = new Date().toJSON();
  const city = {
    lat: '50.431759',
    lon: '30.517023'
  }
  useEffect(() => {
    climacellService.getDailyWeather(date, city)
      .then(res => console.log('response', res))
      .catch(err => console.log('err => ', err))
  })
  return 'Hello';
}
export default TestApiComponent;
