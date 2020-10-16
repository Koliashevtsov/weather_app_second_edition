import React from 'react';

import './reset.css';
import './app.scss';

import Header from '../header';
import Board from '../board';
import PanelsContainer from '../../containers/panels-container';
import ErrorBoundry from '../error-boundry';

const App = () => {
  return (
    <ErrorBoundry>
      <div className="app">
        <Header/>
        <Board/>
        <PanelsContainer/>
      </div>
    </ErrorBoundry>
  );
}
export default App;
