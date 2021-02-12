import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HourItem from '../hour-item';

const item = {
  id: 14, interval: '14:00-16:00', description: 'sunny', temperature: '+21'   // i use data from fake-data.js
}

describe('HourItem', () => {
  test('divs must include appropriate textContent', () => {
    render(<HourItem item={item}/>)
    expect(screen.getByTestId('duration')).toHaveTextContent(/^\d{2}\:\d{2}\-\d{2}\:\d{2}$/) // example '10:00-12:00'
    expect(screen.getByTestId('description')).toHaveTextContent(/^[a-zA-Z]+$/) // example 'CLOUDLY'
    expect(screen.getByTestId('temperature')).toHaveTextContent(/^[+-]\d+\°$/) // example '+18°'
  })
  test('should call changeActiveHourInterval if click', () => {
    const mockChangeActiveHourInterval = jest.fn()
    render(<HourItem item={item} changeActiveHourInterval={mockChangeActiveHourInterval}/>)
    fireEvent.click(screen.getByTestId('clicked'))
    expect(mockChangeActiveHourInterval).toHaveBeenCalledTimes(1)
  })
})
