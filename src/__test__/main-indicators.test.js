import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MainIndicators from  '../components/main-indicators';

describe('MainIndicators', () => {
  test('divs must include appropriate textContent', () => {
    render(<MainIndicators/>)
    expect(screen.getByTestId('temperature')).toHaveTextContent(/^[+-]?\d+\°$/) // example '+18°'
    expect(screen.getByTestId('date')).toHaveTextContent(/^[a-zA-Z]+\,\s\d+\s[a-zA-Z]+$/) // example 'Thursday, 8 June'
    expect(screen.getByTestId('description')).toHaveTextContent(/^[a-z]+$/) // example 'cloudly'
  })
})
