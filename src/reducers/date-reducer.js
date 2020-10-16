const dateReducer = (state, action) => {
  if(state === undefined){
    return {
      activeTimeIntervalId: '',
      activeDate: ''
    };
  }
  switch (action.type) {
    case 'SET_TIME_INTERVAL_ID_NOW':
      return {
        ...state,
        activeTimeIntervalId: action.payload
      };
    case 'SET_DATE':
      return {
        ...state,
        activeDate: action.payload
      };
    default:
      return state;
  }
}
export default dateReducer;
