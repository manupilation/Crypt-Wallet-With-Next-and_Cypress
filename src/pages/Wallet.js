import React from 'react';
import { ExpenseForm, Header } from '../components';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
        <Table />
      </div>
    );
  }
}

export default Wallet;
