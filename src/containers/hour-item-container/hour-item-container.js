import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setTimeIntervalId } from '../../actions';

import HourItem from '../../components/hour-item';

const HourItemContainer = ({ item }) => {

  const activeTimeIntervalId = useSelector(state => state.date.activeTimeIntervalId);
  const dispatch = useDispatch();


  function changeActiveHourInterval(id) {
    dispatch(setTimeIntervalId(id))
  }

  return (
    <HourItem item={item}
      activeTimeIntervalId={activeTimeIntervalId}
      changeActiveHourInterval={changeActiveHourInterval}/>
  )
}

export default HourItemContainer;
