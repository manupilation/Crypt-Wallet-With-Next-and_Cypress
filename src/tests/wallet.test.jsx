import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { response as mockData, initialStateHeader, initialStateWithExpenses } from './__mocks__/mockData';
import {expect} from '@jest/globals';
import Wallet from '../components/Wallet';
import * as ReactRedux from 'react-redux';
import { renderWithStore } from './testConfig';

const apiResponse = Promise.resolve({
  json: () => Promise.resolve(mockData),
  ok: true,
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockedExchange = jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

const mockDispatch = jest.fn();
let dispatchSpyon;

jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

beforeAll(() => {
  dispatchSpyon = jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => mockDispatch);;
});

afterEach(() => jest.clearAllMocks());

afterAll(() => global.fetch.mockClear());

describe('Wallet Component', () => { 
  test('Tests if renders without errors', () => {
    const {container} = renderWithStore(<Wallet />, initialStateWithExpenses);
    const {} = renderWithStore(<Wallet />, initialStateWithExpenses);

    expect(container.hasChildNodes()).toBeTruthy();
  });
});
