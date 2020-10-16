import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchWeeklyWeather, weeklyWeatherRequest, weeklyWeatherLoaded } from '../weekly-weather-actions';
import FakeData from '../../services/fake-data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const serviceData = new FakeData()

describe('weekly-weather-actions async', () => {
  test('should execute two actions', () => {
    const store = mockStore({})
    return store.dispatch(fetchWeeklyWeather(serviceData))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0].type).toEqual(weeklyWeatherRequest().type)
        expect(actions[1].type).toEqual(weeklyWeatherLoaded().type)
      })
  })
})
