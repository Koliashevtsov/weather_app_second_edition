const dailyReducer = (state, action) => {
  if(state === undefined){
    return {
      loading: true,
      error: null,
      dailyWeatherList: []
    };
  }
  switch (action.type) {
    case 'FETCH_DAILY_WEATHER_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_DAILY_WEATHER_SUCCESS':
      return {
        ...state,
        loading: false,
        dailyWeatherList: action.payload
      };
    case 'FETCH_DAILY_WEATHER_FAILURE':
    console.log(action.payload);
      return {
        ...state,
        loading: false,
        dailyWeatherList: [],
        error: action.payload
      };
    default:
      return state;
  }
}
export default dailyReducer;
