import React from 'react';
import { initialStateWithExpenses } from '../__mocks__/mockData';
import {expect} from '@jest/globals';
import { renderWithStore } from '../testConfig';
import { ExpenseForm } from '../../components';

describe('Tests ExpenseForm component', () => {
  beforeEach(() => jest.clearAllMocks());
  test('Tests if expenseForm is rendered without errors', () => {
    const expenseForm = renderWithStore(<ExpenseForm />, initialStateWithExpenses);

    expect(expenseForm.container).toBeInTheDocument();
  });
});