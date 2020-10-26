import { dailyWeatherLoaded, dailyWeatherError, dailyWeatherRequest,
  fetchDailyWeather} from '../daily-weather-actions';

describe('daily-weather-actions', () => {
  test('should create action to dailyWeatherLoaded', () => {
    const data = 'some data';
    const expectedAction = {
      type: 'FETCH_DAILY_WEATHER_SUCCESS',
      payload: data
    }
    expect(dailyWeatherLoaded(data)).toEqual(expectedAction)
  })
  test('should create action to dailyWeatherError', () => {
    const err = 'some error';
    const expectedAction = {
      type: 'FETCH_DAILY_WEATHER_FAILURE',
      payload: err
    }
    expect(dailyWeatherError(err)).toEqual(expectedAction)
  })
  test('should create action to dailyWeatherRequest', () => {
    const expectedAction = {
      type: 'FETCH_DAILY_WEATHER_REQUEST'
    }
    expect(dailyWeatherRequest()).toEqual(expectedAction)
  })
})
