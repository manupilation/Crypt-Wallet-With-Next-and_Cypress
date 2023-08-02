import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.user);
  const expenses = useSelector((state) => state.wallet.expenses);

  const totalSpending = () => {
    const result = expenses.reduce((count, curr) => {
      const { value, currency, exchangeRates } = curr;
      const rate = exchangeRates[currency].ask;
      count += parseFloat(value) * parseFloat(rate);
      return count;
    }, 0);
    return Math.round(result * 100) / 100;
  };

  return (
    <header data-testid="email-field">
      <h3>
        Email:
        <span>{` ${user.email}`}</span>
      </h3>

      <div data-testid="total-field">
        <p>
          Despesa total:
          {totalSpending()}
        </p>
      </div>

      <div data-testid="header-currency-field">
        <p>Câmbio: BRL</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  email: PropTypes.string,
};

export default Header;
