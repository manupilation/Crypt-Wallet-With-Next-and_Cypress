import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { actionExpense } from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.totalSpending = this.totalSpending.bind(this);
  }

  totalSpending() {
    const { spending } = this.props;
    const result = spending.reduce((count, curr) => {
      const { value, currency, exchangeRates } = curr;
      const rate = exchangeRates[currency].ask;
      count += (parseFloat(value) * parseFloat(rate));
      return count;
    }, 0);
    return Math.round(result * 100) / 100;
  }

  render() {
    const { user: { email } } = this.props;
    return (
      <header data-testid="email-field">
        <h3>
          Email:
          <span>{` ${email}`}</span>
        </h3>

        <div data-testid="total-field">
          <p>
            Despesa total:
            { this.totalSpending() }
          </p>
        </div>

        <div data-testid="header-currency-field">
          <p>Câmbio: BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user,
  spending: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpenses: (expense) => { dispatch(actionExpense(expense)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
