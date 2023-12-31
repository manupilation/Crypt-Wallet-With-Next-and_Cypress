import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { response as mockData } from './__mocks__/mockData';
import Login from '../components/Login';
import * as ReactRedux from 'react-redux';
import {expect} from '@jest/globals';

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();
let dispatchSpyon;

const apiResponse = Promise.resolve({
  json: () => Promise.resolve(mockData),
  ok: true,
});

jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

beforeAll(() => {
  dispatchSpyon = jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => mockDispatch);;
});

beforeEach(() => {
  ReactRedux.useDispatch.mockClear();
  jest.clearAllMocks()
});

afterAll(() => {
  jest.clearAllMocks();
})

describe('Login Component', () => {
  it('Renders without errors', () => {
    const { container } = render(<Login />);

    expect(container.hasChildNodes()).toBeTruthy();
  });

  it('Render the logo component', () => {
    const { getByAltText } = render(<Login />);
    const logo = getByAltText('Wallet Logo');
    expect(logo).toBeInTheDocument();
  });

  it('Disables the submit button initially', () => {
    const { getByTestId } = render(<Login />);
    const submitButton = getByTestId('submit-button');
    expect(submitButton).toBeDisabled();
  });

  it('Enables the submit button after valid email and password are entered', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(submitButton).toBeEnabled();
  });

  // it('displays an error message for invalid email', () => {
  //   const { getByTestId, getByText } = render(<Login />);
  //   const emailInput = getByTestId('email-input');

  //   fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

  //   const errorMessage = getByText('Invalid email address');
  //   expect(errorMessage).toBeInTheDocument();
  // });

  // it('displays an error message for invalid password', () => {
  //   const { getByTestId, getByText } = render(<Login />);
  //   const passwordInput = getByTestId('password-input');

  //   fireEvent.change(passwordInput, { target: { value: 'short' } });

  //   const errorMessage = getByText('Password must be at least 6 characters');
  //   expect(errorMessage).toBeInTheDocument();
  // });

  it('submits the form with valid inputs calls dispatch function', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(dispatchSpyon).toHaveBeenCalled();
  });
});
