import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { Box, CircularProgress, Radio, Button } from '@material-ui/core';
import Quiz from '../index';
import userEvent from '@testing-library/user-event';

describe('<Quiz />', () => {
  render(<Quiz />);
  test('rendering after loading component', async () => {
    await waitFor(() => {
      render(<CircularProgress />);
    });
    render(<Box />);
  });

  test('checked radio button', () => {
    const onChange = jest.fn();
    render(<Radio onChange={onChange} />);
    const radioButton = screen.getByRole('radio');
    userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  });
});
