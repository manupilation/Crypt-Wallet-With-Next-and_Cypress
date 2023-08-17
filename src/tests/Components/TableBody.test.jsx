import React from 'react';
import { initialStateHeader, initialStateWithExpenses } from '../__mocks__/mockData';
import {expect} from '@jest/globals';
import { renderWithStore } from '../testConfig';
import TableBody from '../../components/TableBody';
import TableHeaderMock from '../__mocks__/tableHeader';
import * as ReactRedux from 'react-redux';
import { fireEvent, screen } from '@testing-library/react';

const mockDispatch = jest.fn();
let dispatchSpyon;

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Tests TableBody component', () => {
  let tableBody;

  beforeEach(() => {
    dispatchSpyon = jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => mockDispatch);

    tableBody = renderWithStore(
      <table>
        <TableHeaderMock />
        <TableBody />
      </table>,
      initialStateWithExpenses);
  });

  afterEach(() => {
    tableBody.unmount();
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  beforeAll(() => jest.clearAllMocks());

  test('Tests if tableBody is rendered without errors', () => {
    expect(tableBody.container).toBeInTheDocument();
  });

  test('Tests if delete button activate handleClick function sending dispatch', () => {
    const deleteBtn = screen.getAllByTestId("delete-btn")[0];

    fireEvent.click(deleteBtn);

    expect(dispatchSpyon).toBeCalled();
  });

  test('Tests if editar button activate handleUpdate function sending dispatch', () => {
    const updateBtn = screen.getAllByTestId("edit-btn")[0];

    fireEvent.click(updateBtn);

    expect(dispatchSpyon).toBeCalled();
  });
});