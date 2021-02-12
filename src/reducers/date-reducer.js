const dateReducer = (state, action) => {
  if(state === undefined){
    return {
      activeTimeIntervalId: '',
      activeDate: ''
    };
  }
  switch (action.type) {
    case 'SET_TIME_INTERVAL_ID_NOW':
    console.log(action.payload);
      return {
        ...state,
        activeTimeIntervalId: action.payload
      };
    case 'SET_DATE':
    console.log(action.type, action.payload);
      return {
        ...state,
        activeDate: action.payload
      };
    default:
      return state;
  }
}
export default dateReducer;
