import dayReducer from '../day-reducer';

describe('day-reducer', () => {
  it('should return the initial state', () => {
    expect(dayReducer(undefined, {})).toEqual({
      loading: true,
      error: null,
      data: null
    })
  })

  it('should handle FETCH_WEATHER_REQUEST', () => {
    expect(dayReducer({}, {
      type: 'FETCH_WEATHER_REQUEST'
    })).toEqual({
      loading: true
    })
  })

  it('should handle FETCH_WEATHER_SUCCESS', () => {
    expect(dayReducer({}, {
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
    expect(dayReducer({}, {
      type: 'FETCH_WEATHER_FAILURE',
      payload: 'some error'
    })).toEqual({
      loading: false,
      data: null,
      error: 'some error'
    })
  })
})
