import React from 'react';

import './reset.css';
import './app.scss';

import Header from '../header';
import Board from '../board';
import HoursItemsList from '../hours-items-list';
import DaysItemsList from '../days-items-list';
import ErrorBoundry from '../error-boundry';

const App = () => {
  return (
    <ErrorBoundry>
      <div className="app">
        <Header/>
        <Board/>
        <HoursItemsList/>
        <DaysItemsList/>
      </div>
    </ErrorBoundry>
  );
}
export default App;
