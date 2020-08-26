import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DayItem from '../components/day-item';

describe('DayItem', () => {
  test('divs must contain appropriate textContent', () => {
    render(<DayItem/>)
    expect(screen.getByTestId('description')).toHaveTextContent(/^[a-zA-Z]+$/) // example 'CLOUDLY'
    expect(screen.getByTestId('temperature')).toHaveTextContent(/^[+-]?\d+\°\s[+-]?\d+\°$/) // example '+18° +20°'
    expect(screen.getByTestId('date')).toHaveTextContent(/^\d+\s[a-zA-Z]{3}$/) // example '7 JUN'
  })
})
