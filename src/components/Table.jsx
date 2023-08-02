import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableBody from './TableBody';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTable() {
    const headers = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];

    return (
      <table>
        <thead>
          <tr>
            { headers.map((header, i) => <th key={ i }>{header}</th>) }
          </tr>
        </thead>
        <TableBody />
      </table>
    );
  }

  render() {
    return (
      <section>
        { this.renderTable() }
      </section>
    );
  }
}

Table.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
