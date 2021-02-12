const cityCoordinatesLoaded = (obj) => {
  return {
    type: 'COORDINATES_OBJ_SUCCESS',
    payload: obj
  };
}
const cityCoordinatesError = (err) => {
  return {
    type: 'COORDINATES_OBJ_FAILURE',
    payload: err
  };
}
const cityCoordinatesRequest = () => {
  return {
    type: 'COORDINATES_OBJ_REQUEST'
  };
}
const setCityName = (cityName) => {
  return {
    type: 'CITY_NAME_SET',
    payload: cityName
  };
}

const fetchCityCoordinates = (service, city) => (dispatch) => {
  dispatch(cityCoordinatesRequest);
  service.forwardGeocoding(city)
    .then(data => dispatch(cityCoordinatesLoaded(data)))
    .catch(err => dispatch(cityCoordinatesError(err)))
}
export {
  fetchCityCoordinates,
  setCityName
}
