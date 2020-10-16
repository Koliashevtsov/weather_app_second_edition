import weekReducer from  '../week-reducer';

describe('weekReducer', () => {
  const initialState = {
    loading: true,
    error: null,
    weeklyWeatherList: []
  }

  test('should return the initial state', () => {
    expect(weekReducer(undefined, {})).toEqual(initialState)
  })

  test('should handle FETCH_WEEKLY_WEATHER_REQUEST', () => {
    expect(weekReducer(initialState, {
      type: 'FETCH_WEEKLY_WEATHER_REQUEST'
    })).toEqual({
      ...initialState,
      loading: true
    })
  })

  test('should handle FETCH_WEEKLY_WEATHER_SUCCESS', () => {
    expect(weekReducer(initialState, {
      type: 'FETCH_WEEKLY_WEATHER_SUCCESS',
      payload: 'some data'
    })).toEqual({
      ...initialState,
      loading: false,
      weeklyWeatherList: 'some data'
    })
  })
})
