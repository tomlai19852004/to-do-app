import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders duty list header', () => {
  render(<App />);
  const dutyListHeaderElement = screen.getByText(/Duty List/i);
  expect(dutyListHeaderElement).toBeInTheDocument();
});
