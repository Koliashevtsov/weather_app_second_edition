import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setDate } from '../../actions';

import DayItem from '../../components/day-item';

const DayItemContainer = ({ item }) => {
  const dispatch = useDispatch();
  const activeDate = useSelector(state => state.date.activeDate);

  function changeActiveDate(dateStr) {
    const newDate = new Date(dateStr)
    dispatch(setDate(newDate))
  }

  return (
    <DayItem item={item} activeDate={activeDate} changeActiveDate={changeActiveDate}/>
  );
}
export default DayItemContainer;
