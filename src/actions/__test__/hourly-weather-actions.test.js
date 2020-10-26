import { hourlyWeatherLoaded, hourlyWeatherError, hourlyWeatherRequest } from '../hourly-weather-actions';

describe('hourly-weather-actions', () => {
  it('should create action to hourly weather success', () => {
    const data = 'data';
    const expectedAction = {
      type: 'FETCH_WEATHER_SUCCESS',
      payload: data
    }
    expect(hourlyWeatherLoaded(data)).toEqual(expectedAction)
  })

  it('should create action to hourly weather error', () => {
    const error = 'error';
    const expectedAction = {
      type: 'FETCH_WEATHER_FAILURE',
      payload: error
    }
    expect(hourlyWeatherError(error)).toEqual(expectedAction)
  })

  it('should create action to loading started', () => {
    const expectedAction = {
      type: 'FETCH_WEATHER_REQUEST'
    }
    expect(hourlyWeatherRequest()).toEqual(expectedAction)
  })

})
