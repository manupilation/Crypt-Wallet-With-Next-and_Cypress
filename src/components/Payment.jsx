import React from 'react';
import PropTypes from 'prop-types';

const Payment = ({ onChange }) => {
  return (
    <label htmlFor="method">
      Método de pagamento:
      <select name="method" id="method" onChange={onChange}>
        <option value="Cartao-credito">Cartão de crédito</option>
        <option value="Cartao-debito">Cartão de débito</option>
        <option value="Dinheiro">Dinheiro</option>
      </select>
    </label>
  );
};

Payment.propTypes = {
  onChange: PropTypes.func,
};

export default Payment;
