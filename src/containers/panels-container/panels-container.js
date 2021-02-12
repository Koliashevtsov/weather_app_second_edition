import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DateTime } from 'luxon';

import { setTimeIntervalId, setDate } from '../../actions';

import Panels from '../../components/panels';

const PanelsContainer = () => {

  function getInitialTimeIntervalId() {
    const nowHour = DateTime.local().hour;
    const id = nowHour;
    return id
  }

  function getInitialDate() {
    return DateTime.local().toString();
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDate(getInitialDate()));
    dispatch(setTimeIntervalId(getInitialTimeIntervalId()));
  })

  return <Panels/>;
}

export default PanelsContainer;
