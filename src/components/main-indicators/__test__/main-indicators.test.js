import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MainIndicators from  '../index';

const item = {
  id: 14, interval: '14:00-16:00', description: 'sunny', temperature: '+21'   // i use data from fake-data.js
}
const date = '2020-10-06T18:42:11.144Z';

describe('MainIndicators', () => {
  test('divs must include appropriate textContent', () => {
    render(
      <MainIndicators
        date={date}
        temperature={item.temperature}
        description={item.description}/>)
    expect(screen.getByTestId('temperature')).toHaveTextContent(/^[+-]\d+\°$/) // example '+18°'
    expect(screen.getByTestId('date')).toHaveTextContent(/^[a-zA-Z]+\,\s\d+\s[a-zA-Z]+$/) // example 'Thursday, 8 June'
    expect(screen.getByTestId('description')).toHaveTextContent(/^[a-z]+$/) // example 'cloudly'
  })
})
