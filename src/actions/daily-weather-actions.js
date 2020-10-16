const dailyWeatherLoaded = (data) => {
  return {
    type: 'FETCH_WEATHER_SUCCESS',
    payload: data
  };
}
const dailyWeatherError = (err) => {
  return {
    type: 'FETCH_WEATHER_FAILURE',
    payload: err
  };
}
const dailyWeatherRequest = () => {
  return {
    type: 'FETCH_WEATHER_REQUEST'
  };
}


const fetchDailyWeather = (service, d) => (dispatch) => {
  dispatch(dailyWeatherRequest())
  return service.getWeatherByDay(d)
    .then(data => {
      dispatch(dailyWeatherLoaded(data))
    })
    .catch(err => {
      dispatch(dailyWeatherError(err))
    })
}

export {
  dailyWeatherLoaded,
  dailyWeatherError,
  dailyWeatherRequest,
  fetchDailyWeather,
}
