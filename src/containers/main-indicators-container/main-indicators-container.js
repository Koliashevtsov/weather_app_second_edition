import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import LoadingIndicator from '../../components/loading-indicator';
import MainIndicators from '../../components/main-indicators';

const MainIndicatorsContainer = () => {

  const [ item, setItem ] = useState(null);

  const activeDate = useSelector(state => state.date.activeDate);
  const activeTimeIntervalId = useSelector(state => state.date.activeTimeIntervalId);
  const data = useSelector(state => state.hourlyWeather.data);

  useEffect(() => {
    if(data){
      console.log('data in MainIndicatorsContainer', data);
      const newItem = data.find(i => i.id === activeTimeIntervalId);
      setItem(newItem);
    }

  }, [activeDate, activeTimeIntervalId, data])

  if(activeDate && item){
    return (
      <MainIndicators
        date={activeDate}
        temperature={item.temperature}
        description={item.description}/>
    );
  }
  else{
    return <LoadingIndicator/>;
  }

}
export default MainIndicatorsContainer;
