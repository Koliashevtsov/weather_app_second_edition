const dailyWeatherLoaded = (data) => {
  return {
    type: 'FETCH_DAILY_WEATHER_SUCCESS',
    payload: data
  };
}
const dailyWeatherError = (err) => {
  return {
    type: 'FETCH_DAILY_WEATHER_FAILURE',
    payload: err
  };
}
const dailyWeatherRequest = () => {
  return {
    type: 'FETCH_DAILY_WEATHER_REQUEST'
  };
}

const fetchDailyWeather = (service) => (dispatch) => {
  dispatch(dailyWeatherRequest())
  return service.getDailyWeather() // i return promise in order to get it in tests
    .then(data => dispatch(dailyWeatherLoaded(data)))
    .catch(err => dispatch(dailyWeatherError(err)))
}

export {
  dailyWeatherLoaded,
  dailyWeatherError,
  dailyWeatherRequest,
  fetchDailyWeather
}
