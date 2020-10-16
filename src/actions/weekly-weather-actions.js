const weeklyWeatherLoaded = (data) => {
  return {
    type: 'FETCH_WEEKLY_WEATHER_SUCCESS',
    payload: data
  };
}
const weeklyWeatherError = (err) => {
  return {
    type: 'FETCH_WEEKLY_WEATHER_FAILURE',
    payload: err
  };
}
const weeklyWeatherRequest = () => {
  return {
    type: 'FETCH_WEEKLY_WEATHER_REQUEST'
  };
}

const fetchWeeklyWeather = (service) => (dispatch) => {
  dispatch(weeklyWeatherRequest())
  return service.getWeatherByWeek() // i return promise in order to get it in tests
    .then(data => dispatch(weeklyWeatherLoaded(data)))
    .catch(err => dispatch(weeklyWeatherError(err)))
}

export {
  weeklyWeatherLoaded,
  weeklyWeatherError,
  weeklyWeatherRequest,
  fetchWeeklyWeather
}
