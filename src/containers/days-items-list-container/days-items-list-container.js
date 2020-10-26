import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDailyWeather,  } from '../../actions';

import LoadingIndicator from '../../components/loading-indicator';
import DaysItemsList from '../../components/days-items-list';
import ClimaCellContext from '../../components/clima-cell-context';


const DaysItemsListContainer = () => {

  const dispatch = useDispatch();
  const service = useContext(ClimaCellContext);

  useEffect(() => {
    dispatch(fetchDailyWeather(service));
  }, [service])

  const loading = useSelector(state => state.weeklyWeather.loading);
  const list = useSelector(state => state.weeklyWeather.weeklyWeatherList);

  if(loading){
    return <LoadingIndicator/>;
  }
  if(list){
    return <DaysItemsList list={list}/>;
  }
}
export default DaysItemsListContainer;
