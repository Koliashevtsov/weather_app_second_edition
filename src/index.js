import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import ClimaCellContext from './components/clima-cell-context';
import ClimacellService from './services/climacell-service';
import FakeData from './services/fake-data';

import App from './components/app';

const fakeData = new FakeData();
const climacellService = new ClimacellService();

ReactDOM.render(
  <Provider store={store}>
    <ClimaCellContext.Provider value={climacellService}>
      <App/>
    </ClimaCellContext.Provider>
  </Provider>,
  document.querySelector('#root')
)
