import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';
import Button from './Button';

class TableBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { remove } = this.props;

    const getExpenseId = parseInt(target.name, 10);
    remove(getExpenseId);
  }

  render() {
    const { getExpenses } = this.props;

    return (
      <tbody>
        { getExpenses.map((expense) => {
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
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{(exchangeRates[currency].name).split('/')[0]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <Button
                  type="button"
                  name={ id }
                  testID="delete-btn"
                  onClick={ this.handleClick }
                  text="Excluir"
                />

                <Button
                  type="button"
                  name={ id }
                  testID="edit-btn"
                  onClick={ this.handleClick }
                  text="Editar"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (expenseId) => dispatch(deleteExpense(expenseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
