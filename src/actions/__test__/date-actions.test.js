import { setTimeIntervalId, setDate } from '../date-actions';

describe('date-actions', () => {
  it('should create action to set time id', () => {
    const id = 4
    const expectedAction = {
      type: 'SET_TIME_INTERVAL_ID_NOW',
      payload: id
    }
    expect(setTimeIntervalId(id)).toEqual(expectedAction)
  })
  it('should create action to set date', () => {
    const date = 'some date';
    const expectedAction = {
      type: 'SET_DATE',
      payload: date
    }
    expect(setDate(date)).toEqual(expectedAction)
  })
})
