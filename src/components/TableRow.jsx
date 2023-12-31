import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../actions';
import { actionToggleIsEditing } from '../actions';
import Image from 'next/image';

const TableRow = ({ exp }) => {
  const {
    id,
    currency,
    description,
    tag,
    method,
    value,
    exchangeRates,
  } = exp;

  const dispatch = useDispatch();

  const handleClick = (expenseId) => {
    dispatch(deleteExpense(expenseId));
  };

  const handleIsEditing = (id) => {
    dispatch(actionToggleIsEditing([true, id]));
  }

  return (
    <tr
      key={id}
    >
      <td>{description}</td>
      <td>{tag}</td>
      <td>{method}</td>
      <td>{value}</td>
      <td>{exchangeRates[currency].name.split('/')[0]}</td>
      <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
      <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
      <td>Real</td>
      <td className='optionsCase'>
        <button
          type="button"
          name={id}
          data-testid="delete-btn"
          onClick={() => handleClick(id)}
          className="excludeBtn"
        ><Image src="/images/exclude.svg" width={18} height={18} alt='exclude button'/></button>

        <button
          type="button"
          name={id}
          data-testid="edit-btn"
          onClick={() => handleIsEditing(id)}
          className="editBtn"
        ><Image src="/images/edit.svg" width={18} height={18} alt='exclude button'/></button>
      </td>
    </tr>
  )
}

export default TableRow;
