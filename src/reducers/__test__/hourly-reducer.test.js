import hourlyReducer from '../hourly-reducer';

describe('hourly-reducer', () => {
  it('should return the initial state', () => {
    expect(hourlyReducer(undefined, {})).toEqual({
      loading: true,
      error: null,
      data: null
    })
  })

  it('should handle FETCH_WEATHER_REQUEST', () => {
    expect(hourlyReducer({}, {
      type: 'FETCH_WEATHER_REQUEST'
    })).toEqual({
      loading: true
    })
  })

  it('should handle FETCH_WEATHER_SUCCESS', () => {
    expect(hourlyReducer({}, {
      type: 'FETCH_WEATHER_SUCCESS',
      payload: {
        date: 'some data',
        intervals: []
      }
    })).toEqual({
      loading: false,
      data: {
        date: 'some data',
        intervals: []
      }
    })
  })

  it('should handle FETCH_WEATHER_FAILURE', () => {
    expect(hourlyReducer({}, {
      type: 'FETCH_WEATHER_FAILURE',
      payload: 'some error'
    })).toEqual({
      loading: false,
      data: null,
      error: 'some error'
    })
  })
})
