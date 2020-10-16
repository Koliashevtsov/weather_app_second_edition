import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDailyWeather } from '../../actions';

import ClimaCellContext from '../../components/clima-cell-context';

import LoadingIndicator from '../../components/loading-indicator';
import HoursItemsList from '../../components/hours-items-list';

const HoursItemsListContainer = () => {

  const dispatch = useDispatch();
  const serviceData = useContext(ClimaCellContext)

  const date = useSelector(state => state.date.activeDate);

  useEffect(() => {
    dispatch(fetchDailyWeather(serviceData, date))
  }, [serviceData, date])

  const loading = useSelector(state => state.dailyWeather.loading)
  const data = useSelector(state => state.dailyWeather.data)

  if(loading){
    return <LoadingIndicator/>;
  }

  if(data){
    return (
      <HoursItemsList list={data.intervals}/>
    );
  }
}
export default HoursItemsListContainer;
