import React, { useState } from 'react'
import Input from '../Input';
import Select from '../Select';
import { methods, tags } from '../../validations/data';
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeExpense, actionToggleIsEditing, deleteExpense } from '../../actions';
import style from './style.module.scss';

const EditExpenseForm = (props) => {
  const {id, currencies} = props;

  const expenses = useSelector((state) => state.wallet.expenses);
  const dispatch = useDispatch();

  const {value, description, currency, method, tag, exchangeRates} = [...expenses]
  .find((exp) => exp.id === id);

  const [expense, setExpense] = useState({
    id,
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleClickToChangeButton = (event) => {
    event.preventDefault();

    dispatch(deleteExpense(id));
    dispatch(actionChangeExpense(expense));
    dispatch(actionToggleIsEditing([false, null]));
  }

  return (
    <form className={style.editExpenseForm}>
      <Input
        type="number"
        name="value"
        placeholder="0"
        id="expense-value"
        labelText="Valor"
        onChange={handleChange}
        value={expense.value}
      />
      <Select
        value={expense.currency}
        name="currency"
        labelText="Moeda"
        id="expense-currency"
        options={currencies}
        onChange={handleChange}
        selected={expense.currency}
      />
      <Select
        name="method"
        value={expense.method}
        labelText="Método de pagamento"
        id="expense-payment"
        options={methods}
        onChange={handleChange}
        selected={expense.method}
      />
      <Select
        name="tag"
        value={expense.tag}
        labelText="Tag"
        id="expense-category"
        options={tags}
        onChange={handleChange}
        selected={expense.tag}
      />
      <Input
        type="text"
        name="description"
        placeholder="..."
        id="expense-description"
        labelText="Descrição"
        onChange={handleChange}
        value={expense.description}
      />
      <button type="button" onClick={handleClickToChangeButton}>
        Editar gasto
      </button>
    </form>
  );
};

export default EditExpenseForm