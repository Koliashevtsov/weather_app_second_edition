import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HourItem from '../components/hour-item';

describe('HourItem', () => {
  test('divs must include appropriate textContent', () => {
    render(<HourItem />)
    expect(screen.getByTestId('duration')).toHaveTextContent(/^\d{2}\:\d{2}\-\d{2}\:\d{2}$/) // example '10:00-12:00'
    expect(screen.getByTestId('description')).toHaveTextContent(/^[a-zA-Z]+$/) // example 'CLOUDLY'
    expect(screen.getByTestId('temperature')).toHaveTextContent(/^[+-]?\d+\°$/) // example '+18°'
  })

})
