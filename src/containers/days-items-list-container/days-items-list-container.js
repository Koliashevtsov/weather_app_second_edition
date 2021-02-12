import React, { useEffect, useContext, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDailyWeather,  } from '../../actions';

import LoadingIndicator from '../../components/loading-indicator';
import DaysItemsList from '../../components/days-items-list';
import ClimaCellContext from '../../components/clima-cell-context';


const DaysItemsListContainer = () => {

  const dispatch = useDispatch();
  const service = useContext(ClimaCellContext);
  const date = useSelector(state => state.date.activeDate);
  const cityCoordinates = useSelector(state => state.place.coordinates);
  console.log('city object', cityCoordinates);
  // cityCoordinates must be object, so I use useMemo to check changes
  const city = useMemo(() => (
    cityCoordinates
  ), [cityCoordinates.lat, cityCoordinates.lon])


  useEffect(() => {
    dispatch(fetchDailyWeather(service, city));
  }, [service, city])

  const loading = useSelector(state => state.dailyWeather.loading);
  const err = useSelector(state => state.dailyWeather.error);
  const list = useSelector(state => state.dailyWeather.dailyWeatherList);
  console.log('dailyList', list);

  if(loading){
    return <LoadingIndicator/>;
  }
  if(err){
    return <div>Something err</div>;
  }
  if(list){
    return <DaysItemsList list={list}/>;
  }
}
export default DaysItemsListContainer;
