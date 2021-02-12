import React, { useEffect, useContext, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchHourlyWeather } from '../../actions';

import ClimaCellContext from '../../components/clima-cell-context';

import LoadingIndicator from '../../components/loading-indicator';
import FilterComponent from '../../components/filter-component';

const HoursItemsListContainer = () => {

  const dispatch = useDispatch();
  const serviceData = useContext(ClimaCellContext)

  const date = useSelector(state => state.date.activeDate);
  const cityCoordinates = useSelector(state => state.place.coordinates);
  // cityCoordinates must be object, so I use useMemo to check changes
  const city = useMemo(() => (
    cityCoordinates
  ), [cityCoordinates.lat, cityCoordinates.lon])

  useEffect(() => {
    if(date && city){
      console.log('activeDate', date);
      dispatch(fetchHourlyWeather(serviceData, date, city))
    }
  }, [serviceData, date, city])

  const loading = useSelector(state => state.hourlyWeather.loading)
  const err = useSelector(state => state.hourlyWeather.error)
  const data = useSelector(state => state.hourlyWeather.data)
  console.log(data);

  if(loading){
    return <LoadingIndicator/>;
  }
  if(err){
    return err;
  }

  if(data){
    return (
      <FilterComponent list={data}/>
    );
  }
}
export default HoursItemsListContainer;
