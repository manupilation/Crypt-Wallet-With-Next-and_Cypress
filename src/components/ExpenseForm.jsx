import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins, fetchExpenseAPI } from '../actions';
import Input from './Input';
import Select from './Select';
import { methods, tags } from '../validations/data';
import EditExpenseForm from './EditExpenseForm/EditExpenseForm';

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  });

  const currencies = useSelector((state) => state.wallet.currencies);
  const isEditing = useSelector((state) => state.wallet.isEditing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchExpenseAPI(expense));
    setExpense({
      id: expense.id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
    clearInputs();
  };

  const clearInputs = () => {
    document.getElementById('formContainer').reset();
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const filterCoins = Object.keys(currencies);
  const filterCurrencies = filterCoins.filter((item) => item !== 'USDT');

  if (isEditing[0]) {
    return (
      <EditExpenseForm currencies={filterCurrencies} id={isEditing[1]}/>
    );
  };

  return (
    <form onSubmit={handleSubmit} id="formContainer">
      <Input
        type="number"
        name="value"
        placeholder="0"
        id="expense-value"
        labelText="Valor"
        onChange={handleChange}
      />
      <Select
        value={expense.currency}
        name="currency"
        labelText="Moeda"
        id="expense-currency"
        options={filterCurrencies}
        onChange={handleChange}
      />
      <Select
        name="method"
        value={expense.method}
        labelText="Método de pagamento"
        id="expense-payment"
        options={methods}
        onChange={handleChange}
      />
      <Select
        name="tag"
        value={expense.tag}
        labelText="Tag"
        id="expense-category"
        options={tags}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="description"
        placeholder="..."
        id="expense-description"
        labelText="Descrição"
        onChange={handleChange}
      />
      <button type="submit" name="expense-submit" id="expense-submit">
        Adicionar despesas
      </button>
    </form>
  );
};

ExpenseForm.propTypes = {
  dispatchRequest: PropTypes.func,
  currencies: PropTypes.objectOf(PropTypes.object),
};

export default ExpenseForm;
