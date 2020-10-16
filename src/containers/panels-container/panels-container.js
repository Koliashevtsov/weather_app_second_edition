import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setTimeIntervalId, setDate } from '../../actions';

import Panels from '../../components/panels';

const PanelsContainer = () => {

  function getInitialTimeIntervalId() {
    const nowDate = new Date();
    const nowHour = nowDate.getHours();
    if((nowHour % 2) === 0){
      return nowHour;
    } else {
      return nowHour - 1;
    }
  }

  function getInitialDate() {
    return new Date();
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDate(getInitialDate()));
    dispatch(setTimeIntervalId(getInitialTimeIntervalId()));
  })

  return <Panels/>;
}

export default PanelsContainer;
