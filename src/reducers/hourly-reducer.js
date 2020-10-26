const hourlyReducer = (state, action) => {
  console.log(action.type);
  if(state === undefined){
    return {
      loading: true,
      error: null,
      data: null
    };
  }
  switch (action.type) {
    case 'FETCH_WEATHER_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: {
          date: action.payload.date,
          intervals: action.payload.intervals
        }
      };
    case 'FETCH_WEATHER_FAILURE':
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload
      }
    default:
      return state;
  }
}
export default hourlyReducer;
