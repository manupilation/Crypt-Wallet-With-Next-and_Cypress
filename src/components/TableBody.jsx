import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';
import Button from './Button';
import { actionToggleIsEditing } from '../actions';

const TableBody = () => {
  const getExpenses = useSelector((state) => state.wallet.expenses);
  const dispatch = useDispatch();

  const handleClick = (expenseId) => {
    dispatch(deleteExpense(expenseId));
  };

  const handleIsEditing = (id) => {
    dispatch(actionToggleIsEditing([true, id]));
  }

  return (
    <tbody>
      {getExpenses.map((expense) => {
        const {
          id,
          currency,
          description,
          tag,
          method,
          value,
          exchangeRates,
        } = expense;

        return (
          <tr key={id}>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{value}</td>
            <td>{exchangeRates[currency].name.split('/')[0]}</td>
            <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
            <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <Button
                type="button"
                name={id}
                testID="delete-btn"
                onClick={() => handleClick(id)}
                text="Excluir"
              />

              <Button
                type="button"
                name={id}
                testID="edit-btn"
                onClick={() => handleIsEditing(id)}
                text="Editar"
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

TableBody.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.object),
};

export default TableBody;
