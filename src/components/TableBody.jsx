import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const TableBody = () => {
  const getExpenses = useSelector((state) => state.wallet.expenses);

  const expenses = [...getExpenses];

  return (
    <tbody>
      {expenses && expenses.map((exp, i) =>
        <TableRow exp={exp} key={i}/>
      )}
    </tbody>
  );
};

TableBody.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.object),
};

export default TableBody;
