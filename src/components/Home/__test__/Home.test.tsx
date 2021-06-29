import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../index';

describe('<Home />', () => {
  render(<Home />);
  const buttonElement = screen.getByText(/Start/i);
  test('component rendering', () => {
    expect(buttonElement).toBeInTheDocument();
  });

  test('button click', () => {
    userEvent.click(buttonElement);
  });
});
