const weekReducer = (state, action) => {
  if(state === undefined){
    return {
      loading: true,
      error: null,
      weeklyWeatherList: []
    };
  }
  switch (action.type) {
    case 'FETCH_WEEKLY_WEATHER_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_WEEKLY_WEATHER_SUCCESS':
      return {
        ...state,
        loading: false,
        weeklyWeatherList: action.payload
      };
    default:
      return state;
  }
}
export default weekReducer;
