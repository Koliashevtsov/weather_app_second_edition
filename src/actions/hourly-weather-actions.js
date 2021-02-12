const hourlyWeatherLoaded = (data) => {
  return {
    type: 'FETCH_WEATHER_SUCCESS',
    payload: data
  };
}
const hourlyWeatherError = (err) => {
  return {
    type: 'FETCH_WEATHER_FAILURE',
    payload: err
  };
}
const hourlyWeatherRequest = () => {
  return {
    type: 'FETCH_WEATHER_REQUEST'
  };
}


const fetchHourlyWeather = (service, d, city) => (dispatch) => {
  dispatch(hourlyWeatherRequest())
  return service.getHourlyWeather(d, city)
    .then(data => {
      dispatch(hourlyWeatherLoaded(data))
    })
    .catch(err => {
      dispatch(hourlyWeatherError(err))
    })
}

export {
  hourlyWeatherLoaded,
  hourlyWeatherError,
  hourlyWeatherRequest,
  fetchHourlyWeather,
}
