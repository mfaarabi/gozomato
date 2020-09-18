import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Testing from './';
import { apiCall } from './api';

jest.mock('./api');

afterEach(() => {
  jest.resetAllMocks();
});

test('result changes when input is changed and useEffect button is clicked', async () => {
  apiCall.mockResolvedValue('mocked resolve');
  render(<Testing />);
  const textInput = screen.getByDisplayValue(/default/i);
  const buttonUseEffect = screen.getByRole('button', {
    name: 'change with useEffect'
  });

  fireEvent.change(textInput, { target: { value: 'a' } });
  fireEvent.click(buttonUseEffect);

  await waitFor(() => {
    expect(apiCall).toHaveBeenCalledTimes(2);
    expect(apiCall).toHaveBeenCalledWith('a');
    expect(screen.getByText(/result: mocked resolve/i)).toBeInTheDocument();
  });
});

test('result changes when input is changed and submit form button is clicked', async () => {
  apiCall.mockResolvedValue('mocked resolve');
  render(<Testing />);
  const textInput = screen.getByDisplayValue(/default/i);
  const buttonUseEffect = screen.getByRole('button', {
    name: 'change with form submit'
  });

  fireEvent.change(textInput, { target: { value: 'a' } });
  fireEvent.click(buttonUseEffect);

  await waitFor(() => {
    expect(apiCall).toHaveBeenCalledTimes(2);
    expect(apiCall).toHaveBeenCalledWith('a');
    expect(screen.getByText(/result: mocked resolve/i)).toBeInTheDocument();
  });
});
