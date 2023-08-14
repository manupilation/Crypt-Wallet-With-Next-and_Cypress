import React from 'react';
import { currencies, initialStateWithExpensesEditingTrue } from '../__mocks__/mockData';
import {expect} from '@jest/globals';
import EditExpenseForm from '../../components/EditExpenseForm/EditExpenseForm';
import { renderWithStore } from '../testConfig';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as ReactRedux from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();

describe('Tests EditExpense component', () => {
  let editExpense;
  let dispatchSpyon;

  beforeAll(() => {
    dispatchSpyon = jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockDispatch);
  })

  beforeEach(() => {
    editExpense = renderWithStore(<EditExpenseForm id={0} currencies={currencies}/>,initialStateWithExpensesEditingTrue);
  });

  test('Tests if EditExpense component is normaly rendered', () => {
    expect(editExpense.container).toBeInTheDocument();
  });

  test('Tests if EditExpense valor input can be modified', async () => {
    const valueInput = screen.getByPlaceholderText('0');

    await userEvent.type(valueInput, '0');

    expect(valueInput).toHaveValue(100);
  });

  test('Tests if EditExpense currency select can be modified', async () => {
    const currencySelect = screen.getByLabelText('Moeda');
    userEvent.selectOptions(currencySelect, 'USD');

    expect(currencySelect).toHaveValue('USD');
  });

  test('Tests if EditExpense method select can be modified', async () => {
    const methodSelect = screen.getByLabelText('Método de pagamento');
    userEvent.selectOptions(methodSelect, 'Cartão de crédito');
    
    expect(methodSelect).toHaveValue('Cartão de crédito');
  });

  test('Tests if EditExpense tag select can be modified', async () => {
    const tagSelect = screen.getByLabelText('Tag');
    userEvent.selectOptions(tagSelect, 'Lazer');

    expect(tagSelect).toHaveValue('Lazer');
  });

  test('Tests if EditExpense valor input can be modified', async () => {
    const descInput = screen.getByPlaceholderText(/\.\.\./);

    await userEvent.type(descInput, '.');

    expect(descInput).toHaveValue('Dez dólares.');
  });

  test('Tests if EditExpense valor input can be modified', () => {
    const editarBtn = screen.getByRole('button', {text: /editar gasto/i});

    userEvent.click(editarBtn);

    expect(dispatchSpyon).toBeCalled();
  });
});