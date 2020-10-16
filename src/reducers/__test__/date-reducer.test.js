import dateReducer from '../date-reducer';

describe('date-reducer', () => {
  it('should return initialState', () => {
    expect(dateReducer(undefined, {})).toEqual({
      activeTimeIntervalId: '',
      activeDate: ''
    })
  })
  it('should handle SET_TIME_INTERVAL_ID_NOW', () => {
    expect(dateReducer({}, {
      type: 'SET_TIME_INTERVAL_ID_NOW',
      payload: 'some time'
    })).toEqual({
      activeTimeIntervalId: 'some time'
    })
  })
  it('should handle SET_DATE', () => {
    expect(dateReducer({}, {
      type: 'SET_DATE',
      payload: 'some date'
    })).toEqual({
      activeDate: 'some date'
    })
  })
})
