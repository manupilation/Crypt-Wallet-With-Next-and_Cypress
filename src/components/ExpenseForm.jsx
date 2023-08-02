import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchCoins, fetchExpenseAPI } from '../actions';
import Input from './Input';
import Select from './Select';
import { methods, tags } from '../Verificadores/data';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      expense: {
        id: 0,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputs = this.inputs.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  componentDidMount() {
    const { dispatchRequest } = this.props;
    dispatchRequest();
  }

  handleSubmit(event) {
    event.preventDefault();
    const { expense } = this.state;
    const { dispatchExpenses } = this.props;
    this.setState({
      expense: {
        id: expense.id + 1,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    }, () => {
      dispatchExpenses(expense);
      this.clearInputs();
    });
  }

  clearInputs() {
    document.getElementById('formContainer').reset();
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { expense } = this.state;
    this.setState({
      expense: {
        ...expense,
        [name]: value,
      },
    });
  }

  inputs() {
    return (
      <div>
        <Input
          type="number"
          name="value"
          placeholder="0"
          id="expense-value"
          labelText="Valor"
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          name="description"
          placeholder="..."
          id="expense-description"
          labelText="Descrição"
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  render() {
    const { currency, method, tag } = this.state;
    const { currencies } = this.props;
    const filterCoins = Object.keys(currencies);
    const filterCurrencies = filterCoins.filter((item) => item !== 'USDT');
    return (
      <form onSubmit={ this.handleSubmit } id="formContainer">
        { this.inputs() }
        <Select
          value={ currency }
          name="currency"
          labelText="Moeda"
          id="expense-currency"
          options={ filterCurrencies }
          onChange={ this.handleChange }
        />
        <Select
          name="method"
          value={ method }
          labelText="Método de pagamento"
          id="expense-payment"
          options={ methods }
          onChange={ this.handleChange }
        />
        <Select
          name="tag"
          value={ tag }
          labelText="Tag"
          id="expense-category"
          options={ tags }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          name="expense-submit"
          id="expense-submit"
        >
          Adicionar despesas
        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  dispatchRequest: PropTypes.func,
  currencies: PropTypes.objectOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRequest: () => dispatch(fetchCoins()),
  dispatchExpenses: (payload) => dispatch(fetchExpenseAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
