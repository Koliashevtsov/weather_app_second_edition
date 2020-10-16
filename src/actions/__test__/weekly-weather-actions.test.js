import { weeklyWeatherLoaded, weeklyWeatherError, weeklyWeatherRequest,
  fetchWeeklyWeather} from '../weekly-weather-actions';

describe('weekly-weather-actions', () => {
  test('should create action to weeklyWeatherLoaded', () => {
    const data = 'some data';
    const expectedAction = {
      type: 'FETCH_WEEKLY_WEATHER_SUCCESS',
      payload: data
    }
    expect(weeklyWeatherLoaded(data)).toEqual(expectedAction)
  })
  test('should create action to weeklyWeatherError', () => {
    const err = 'some error';
    const expectedAction = {
      type: 'FETCH_WEEKLY_WEATHER_FAILURE',
      payload: err
    }
    expect(weeklyWeatherError(err)).toEqual(expectedAction)
  })
  test('should create action to weeklyWeatherRequest', () => {
    const expectedAction = {
      type: 'FETCH_WEEKLY_WEATHER_REQUEST'
    }
    expect(weeklyWeatherRequest()).toEqual(expectedAction)
  })
})
