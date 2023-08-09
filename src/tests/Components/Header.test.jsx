import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { response as mockData, initialStateHeader, initialStateWithExpenses } from '../__mocks__/mockData';
import {expect} from '@jest/globals';
import { renderWithStore } from '../testConfig';
import { Header } from '../../components';

describe('Tests Header component', () => {
  let header;

  beforeEach(() => {
    header = renderWithStore(<Header />, initialStateHeader);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('Tests if header is rendered', () => {
    expect(header.container).toBeInTheDocument();
  });

  test('Tests if header has email field to present user', () => {
    const {getByRole} = header;

    const emailUser = getByRole('heading', {level: 3});

    expect(emailUser.children[0].innerHTML).toContain(initialStateHeader.user.email);
  });

  test('Tests if header has totalField value', () => {
    const {getByText} = header;

    const emailUser = getByText(/^despesa/i);

    expect(emailUser).toBeInTheDocument();
    expect(emailUser.innerHTML).toContain("0");
  });

  test('Tests if header has totalField value', () => {
    const {getByText} = header;

    const emailUser = getByText(/^câmbio/i);

    expect(emailUser).toBeInTheDocument();
  });
});
