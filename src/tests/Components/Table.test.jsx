import React from 'react';
import { initialStateHeader } from '../__mocks__/mockData';
import {expect} from '@jest/globals';
import { renderWithStore } from '../testConfig';
import Table from '../../components/Table';

describe('Tests Table component', () => {
  beforeEach(() => jest.clearAllMocks());
  test('Tests if table is rendered without errors', () => {
    const table = renderWithStore(<Table />, initialStateHeader);

    expect(table.container).toBeInTheDocument();
  });
});