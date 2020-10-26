import dailyReducer from  '../daily-reducer';

describe('dailyReducer', () => {
  const initialState = {
    loading: true,
    error: null,
    dailyWeatherList: []
  }

  test('should return the initial state', () => {
    expect(dailyReducer(undefined, {})).toEqual(initialState)
  })

  test('should handle FETCH_DAILY_WEATHER_REQUEST', () => {
    expect(dailyReducer(initialState, {
      type: 'FETCH_DAILY_WEATHER_REQUEST'
    })).toEqual({
      ...initialState,
      loading: true
    })
  })

  test('should handle FETCH_DAILY_WEATHER_SUCCESS', () => {
    expect(dailyReducer(initialState, {
      type: 'FETCH_DAILY_WEATHER_SUCCESS',
      payload: 'some data'
    })).toEqual({
      ...initialState,
      loading: false,
      dailyWeatherList: 'some data'
    })
  })
})
