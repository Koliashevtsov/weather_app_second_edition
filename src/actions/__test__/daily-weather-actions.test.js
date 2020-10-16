import { dailyWeatherLoaded, dailyWeatherError, dailyWeatherRequest } from '../daily-weather-actions';

describe('daily-weather-actions', () => {
  it('should create action to daily weather success', () => {
    const data = 'data';
    const expectedAction = {
      type: 'FETCH_WEATHER_SUCCESS',
      payload: data
    }
    expect(dailyWeatherLoaded(data)).toEqual(expectedAction)
  })

  it('should create action to daily weather error', () => {
    const error = 'error';
    const expectedAction = {
      type: 'FETCH_WEATHER_FAILURE',
      payload: error
    }
    expect(dailyWeatherError(error)).toEqual(expectedAction)
  })

  it('should create action to loading started', () => {
    const expectedAction = {
      type: 'FETCH_WEATHER_REQUEST'
    }
    expect(dailyWeatherRequest()).toEqual(expectedAction)
  })

})
