import React from 'react';
import { initialStateHeader } from '../__mocks__/mockData';
import {expect} from '@jest/globals';
import { renderWithStore } from '../testConfig';
import TableBody from '../../components/TableBody';

describe('Tests TableBody component', () => {
  beforeEach(() => jest.clearAllMocks());
  test('Tests if tableBody is rendered without errors', () => {
    const tableBody = renderWithStore(
    <table>
      <TableBody />
    </table>,
    initialStateHeader);

    expect(tableBody.container).toBeInTheDocument();
  });
});