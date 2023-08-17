import React from 'react';
import { initialStateWithExpenses } from '../__mocks__/mockData';
import {expect} from '@jest/globals';
import { renderWithStore } from '../testConfig';
import { ExpenseForm } from '../../components';
import { cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function unmountComponent(component) {
  component.unmount();
}

describe('Tests ExpenseForm component', () => {
  beforeEach(() => jest.clearAllMocks());

  afterEach(cleanup);

  test('Tests if expenseForm is rendered without errors', () => {
    const expenseForm = renderWithStore(<ExpenseForm />, initialStateWithExpenses);

    expect(expenseForm.container).toBeInTheDocument();

    unmountComponent(expenseForm);
  });

  test('Tests if values inputs are changed if user try', async () => {
    const {getByPlaceholderText} = renderWithStore(<ExpenseForm />, initialStateWithExpenses);
    const valueInput = getByPlaceholderText(/0/i);
    const descriptionInput = getByPlaceholderText(/\.\.\./i);

    const aoMossoValue = '123';
    const description = "Almoço Lagosta Assadara";

    await userEvent.type(valueInput, aoMossoValue);
    await userEvent.type(descriptionInput, description);

    expect(valueInput).toHaveValue(Number(aoMossoValue));
    expect(descriptionInput).toHaveValue(description);
  });


  test('Tests if submit button is pressed, all inputs are reseted', () => {
    const {getByText, getByPlaceholderText} = renderWithStore(
      <ExpenseForm />, initialStateWithExpenses
    );

    const submitButton = getByText(/adicionar/i);
    const valueInput = getByPlaceholderText(/0/i);
    const descriptionInput = getByPlaceholderText(/\.\.\./i);

    fireEvent.change(valueInput, {target: { value: 123 }});
    fireEvent.change(descriptionInput, {target: { value: "Almoço" }});

    fireEvent.click(submitButton);

    expect(valueInput.value).toBe("");
    expect(descriptionInput.value).toBe("");
  });
});