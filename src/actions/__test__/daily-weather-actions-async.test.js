import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchDailyWeather, dailyWeatherRequest, dailyWeatherLoaded } from '../daily-weather-actions';
import FakeData from '../../services/fake-data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const serviceData = new FakeData()

describe('daily-weather-actions async', () => {
  test('should execute two actions', () => {
    const store = mockStore({})
    return store.dispatch(fetchDailyWeather(serviceData))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0].type).toEqual(dailyWeatherRequest().type)
        expect(actions[1].type).toEqual(dailyWeatherLoaded().type)
      })
  })
})
