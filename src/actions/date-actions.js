const setTimeIntervalId = (id) => {
  return {
    type: 'SET_TIME_INTERVAL_ID_NOW',
    payload: id
  };
}
const setDate = (date) => {
  return {
    type: 'SET_DATE',
    payload: date
  };
}

export {
  setTimeIntervalId,
  setDate
}
