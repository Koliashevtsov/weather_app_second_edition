import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DayItem from '../index';

describe('DayItem', () => {
  const item = {
    date: '2020-10-06T18:42:11.144Z',
    minTemp: '+15',
    maxTemp: '+30',
    description: 'sunny'
  };
  test('divs must contain appropriate textContent', () => {
    render(<DayItem item={item} activeDate={new Date()}/>)
    expect(screen.getByTestId('description')).toHaveTextContent(/^[a-zA-Z]+$/) // example 'CLOUDLY'
    expect(screen.getByTestId('temperature')).toHaveTextContent(/^[+-]?\d+\°\s[+-]?\d+\°$/) // example '+18° +20°'
    expect(screen.getByTestId('date')).toHaveTextContent(/^\d+\s[a-zA-Z]{3}$/) // example '7 JUN'
  })
  test('should call changeActiveDate if click', () => {
    const mockChangeActiveDate = jest.fn();
    render(<DayItem item={item} activeDate={new Date()} changeActiveDate={mockChangeActiveDate}/>)
    fireEvent.click(screen.getByTestId('clicked'))
    expect(mockChangeActiveDate).toHaveBeenCalledTimes(1)
  })
})
