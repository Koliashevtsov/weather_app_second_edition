import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchHourlyWeather, hourlyWeatherRequest, hourlyWeatherLoaded } from '../hourly-weather-actions';
import FakeData from '../../services/fake-data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const serviceData = new FakeData();
const date = new Date();

describe('hourly-weather-actions async', () => {

  it('should execute two actions', () => {
    const store = mockStore({})
    return store.dispatch(fetchHourlyWeather(serviceData, date))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0].type).toEqual(hourlyWeatherRequest().type)
        expect(actions[1].type).toEqual(hourlyWeatherLoaded().type)
      })
  })
})
