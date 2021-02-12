import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import ClimaCellContext from './components/clima-cell-context';
import ClimacellService from './services/climacell-service';

import OpenCageContext from './components/open-cage-context';
import OpenCageService from './services/open-cage-service';

import FakeData from './services/fake-data';

import App from './components/app';

const fakeData = new FakeData();
const climacellService = new ClimacellService();
const openCageService = new OpenCageService();

ReactDOM.render(
  <Provider store={store}>
    <ClimaCellContext.Provider value={fakeData}>
      <OpenCageContext.Provider value={openCageService}>
        <App/>
      </OpenCageContext.Provider>
    </ClimaCellContext.Provider>
  </Provider>,
  document.querySelector('#root')
)
